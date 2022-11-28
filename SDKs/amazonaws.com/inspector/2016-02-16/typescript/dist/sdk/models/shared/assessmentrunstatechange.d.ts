import { SpeakeasyBase } from "../../../internal/utils";
import { AssessmentRunStateEnum } from "./assessmentrunstateenum";
/**
 * Used as one of the elements of the <a>AssessmentRun</a> data type.
**/
export declare class AssessmentRunStateChange extends SpeakeasyBase {
    state: AssessmentRunStateEnum;
    stateChangedAt: Date;
}
