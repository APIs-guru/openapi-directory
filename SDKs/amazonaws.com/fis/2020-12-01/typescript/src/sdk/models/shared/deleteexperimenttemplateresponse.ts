import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExperimentTemplate } from "./experimenttemplate";



export class DeleteExperimentTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=experimentTemplate" })
  experimentTemplate?: ExperimentTemplate;
}
