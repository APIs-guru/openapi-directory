import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssessmentRunStateEnum } from "./assessmentrunstateenum";


// AssessmentRunStateChange
/** 
 * Used as one of the elements of the <a>AssessmentRun</a> data type.
**/
export class AssessmentRunStateChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=state" })
  state: AssessmentRunStateEnum;

  @Metadata({ data: "json, name=stateChangedAt" })
  stateChangedAt: Date;
}
