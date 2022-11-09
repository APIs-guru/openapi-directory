import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExperimentStopCondition
/** 
 * Describes the stop condition for an experiment.
**/
export class ExperimentStopCondition extends SpeakeasyBase {
  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
