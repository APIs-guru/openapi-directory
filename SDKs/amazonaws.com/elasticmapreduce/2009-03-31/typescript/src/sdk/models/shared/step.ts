import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionOnFailureEnum } from "./actiononfailureenum";
import { HadoopStepConfig } from "./hadoopstepconfig";
import { StepStatus } from "./stepstatus";



// Step
/** 
 * This represents a step in a cluster.
**/
export class Step extends SpeakeasyBase {
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
