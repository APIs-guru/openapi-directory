import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateExperimentTemplateStopConditionInput
/** 
 * Specifies a stop condition for an experiment template.
**/
export class CreateExperimentTemplateStopConditionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=source" })
  source: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
