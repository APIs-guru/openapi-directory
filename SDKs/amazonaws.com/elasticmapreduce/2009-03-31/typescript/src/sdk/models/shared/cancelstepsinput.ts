import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StepCancellationOptionEnum } from "./stepcancellationoptionenum";



// CancelStepsInput
/** 
 * The input argument to the <a>CancelSteps</a> operation.
**/
export class CancelStepsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId: string;

  @SpeakeasyMetadata({ data: "json, name=StepCancellationOption" })
  stepCancellationOption?: StepCancellationOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=StepIds" })
  stepIds: string[];
}
