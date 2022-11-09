import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExperimentTemplate } from "./experimenttemplate";


export class CreateExperimentTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=experimentTemplate" })
  experimentTemplate?: ExperimentTemplate;
}
