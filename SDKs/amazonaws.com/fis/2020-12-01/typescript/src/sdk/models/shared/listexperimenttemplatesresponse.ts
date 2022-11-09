import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExperimentTemplateSummary } from "./experimenttemplatesummary";


export class ListExperimentTemplatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=experimentTemplates", elemType: shared.ExperimentTemplateSummary })
  experimentTemplates?: ExperimentTemplateSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
