import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StepSummary } from "./stepsummary";



// ListStepsOutput
/** 
 * This output contains the list of steps returned in reverse order. This means that the last step is the first element in the list.
**/
export class ListStepsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=Steps", elemType: StepSummary })
  steps?: StepSummary[];
}
