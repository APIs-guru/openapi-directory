import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JobTemplateSummary } from "./jobtemplatesummary";


export class ListJobTemplatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobTemplates", elemType: shared.JobTemplateSummary })
  jobTemplates?: JobTemplateSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
