import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExperimentTemplate } from "./experimenttemplate";


export class DeleteExperimentTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=experimentTemplate" })
  experimentTemplate?: ExperimentTemplate;
}
