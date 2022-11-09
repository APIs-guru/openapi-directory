import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StepSummary } from "./stepsummary";


// ListStepsOutput
/** 
 * This output contains the list of steps returned in reverse order. This means that the last step is the first element in the list.
**/
export class ListStepsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=Steps", elemType: shared.StepSummary })
  steps?: StepSummary[];
}
