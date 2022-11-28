import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssessmentRunStateEnum } from "./assessmentrunstateenum";



// AssessmentRunStateChange
/** 
 * Used as one of the elements of the <a>AssessmentRun</a> data type.
**/
export class AssessmentRunStateChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=state" })
  state: AssessmentRunStateEnum;

  @SpeakeasyMetadata({ data: "json, name=stateChangedAt" })
  stateChangedAt: Date;
}
