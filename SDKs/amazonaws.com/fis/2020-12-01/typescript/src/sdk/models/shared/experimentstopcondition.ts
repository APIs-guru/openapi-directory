import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExperimentStopCondition
/** 
 * Describes the stop condition for an experiment.
**/
export class ExperimentStopCondition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
