import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExperimentTemplate } from "./experimenttemplate";



export class CreateExperimentTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=experimentTemplate" })
  experimentTemplate?: ExperimentTemplate;
}
