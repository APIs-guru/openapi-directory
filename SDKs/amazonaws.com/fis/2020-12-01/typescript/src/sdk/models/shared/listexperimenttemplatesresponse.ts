import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExperimentTemplateSummary } from "./experimenttemplatesummary";



export class ListExperimentTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=experimentTemplates", elemType: ExperimentTemplateSummary })
  experimentTemplates?: ExperimentTemplateSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
