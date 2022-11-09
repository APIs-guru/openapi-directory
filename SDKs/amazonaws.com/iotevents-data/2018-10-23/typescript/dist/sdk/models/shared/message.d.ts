import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TimestampValue } from "./timestampvalue";
/**
 * Information about a message.
**/
export declare class Message extends SpeakeasyBase {
    inputName: string;
    messageId: string;
    payload: string;
    timestamp?: TimestampValue;
}
