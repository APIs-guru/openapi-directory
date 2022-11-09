import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateExperimentTemplateStopConditionInput
/** 
 * Specifies a stop condition for an experiment. You can define a stop condition as a CloudWatch alarm.
**/
export class UpdateExperimentTemplateStopConditionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=source" })
  source: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
