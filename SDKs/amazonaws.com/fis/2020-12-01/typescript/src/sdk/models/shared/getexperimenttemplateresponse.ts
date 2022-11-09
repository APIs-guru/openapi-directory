import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExperimentTemplate } from "./experimenttemplate";


export class GetExperimentTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=experimentTemplate" })
  experimentTemplate?: ExperimentTemplate;
}
