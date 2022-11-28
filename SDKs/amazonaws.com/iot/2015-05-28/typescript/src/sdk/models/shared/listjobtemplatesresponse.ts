import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobTemplateSummary } from "./jobtemplatesummary";



export class ListJobTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobTemplates", elemType: JobTemplateSummary })
  jobTemplates?: JobTemplateSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
