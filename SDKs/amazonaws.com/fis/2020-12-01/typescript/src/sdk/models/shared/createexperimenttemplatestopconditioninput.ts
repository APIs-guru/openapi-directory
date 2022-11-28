import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateExperimentTemplateStopConditionInput
/** 
 * Specifies a stop condition for an experiment template.
**/
export class CreateExperimentTemplateStopConditionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=source" })
  source: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
