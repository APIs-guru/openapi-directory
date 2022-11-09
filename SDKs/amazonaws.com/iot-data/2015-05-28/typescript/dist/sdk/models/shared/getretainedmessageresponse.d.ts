import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The output from the GetRetainedMessage operation.
**/
export declare class GetRetainedMessageResponse extends SpeakeasyBase {
    lastModifiedTime?: number;
    payload?: string;
    qos?: number;
    topic?: string;
}
