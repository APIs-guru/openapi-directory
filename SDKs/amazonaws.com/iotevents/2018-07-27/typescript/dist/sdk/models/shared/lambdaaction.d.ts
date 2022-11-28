import { SpeakeasyBase } from "../../../internal/utils";
import { Payload } from "./payload";
/**
 * Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.
**/
export declare class LambdaAction extends SpeakeasyBase {
    functionArn: string;
    payload?: Payload;
}
