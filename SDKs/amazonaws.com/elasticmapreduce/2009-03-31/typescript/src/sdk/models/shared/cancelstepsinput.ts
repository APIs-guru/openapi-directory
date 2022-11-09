import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StepCancellationOptionEnum } from "./stepcancellationoptionenum";


// CancelStepsInput
/** 
 * The input argument to the <a>CancelSteps</a> operation.
**/
export class CancelStepsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterId" })
  clusterId: string;

  @Metadata({ data: "json, name=StepCancellationOption" })
  stepCancellationOption?: StepCancellationOptionEnum;

  @Metadata({ data: "json, name=StepIds" })
  stepIds: string[];
}
