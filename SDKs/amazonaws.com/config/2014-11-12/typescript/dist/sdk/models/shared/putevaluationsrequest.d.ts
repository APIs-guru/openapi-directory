import { SpeakeasyBase } from "../../../internal/utils";
import { Evaluation } from "./evaluation";
/**
 * <p/>
**/
export declare class PutEvaluationsRequest extends SpeakeasyBase {
    evaluations?: Evaluation[];
    resultToken: string;
    testMode?: boolean;
}
