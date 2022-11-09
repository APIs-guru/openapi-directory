import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Payload } from "./payload";
/**
 * Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue.
**/
export declare class SqsAction extends SpeakeasyBase {
    payload?: Payload;
    queueUrl: string;
    useBase64?: boolean;
}
