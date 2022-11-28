import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionOnFailureEnum } from "./actiononfailureenum";
import { HadoopStepConfig } from "./hadoopstepconfig";
import { StepStatus } from "./stepstatus";



// StepSummary
/** 
 * The summary of the cluster step.
**/
export class StepSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActionOnFailure" })
  actionOnFailure?: ActionOnFailureEnum;

  @SpeakeasyMetadata({ data: "json, name=Config" })
  config?: HadoopStepConfig;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: StepStatus;
}
