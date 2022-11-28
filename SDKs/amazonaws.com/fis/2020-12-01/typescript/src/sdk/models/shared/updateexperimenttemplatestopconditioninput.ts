import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateExperimentTemplateStopConditionInput
/** 
 * Specifies a stop condition for an experiment. You can define a stop condition as a CloudWatch alarm.
**/
export class UpdateExperimentTemplateStopConditionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=source" })
  source: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
