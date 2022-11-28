import { SpeakeasyBase } from "../../../internal/utils";
import { StopActionEnum } from "./stopactionenum";
export declare class StopAssessmentRunRequest extends SpeakeasyBase {
    assessmentRunArn: string;
    stopAction?: StopActionEnum;
}
