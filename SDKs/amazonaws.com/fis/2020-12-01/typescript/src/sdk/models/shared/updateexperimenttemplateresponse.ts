import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExperimentTemplate } from "./experimenttemplate";


export class UpdateExperimentTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=experimentTemplate" })
  experimentTemplate?: ExperimentTemplate;
}
