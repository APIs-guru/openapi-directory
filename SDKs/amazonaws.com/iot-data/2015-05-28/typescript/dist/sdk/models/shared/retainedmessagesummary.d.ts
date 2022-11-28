import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a single retained message.
**/
export declare class RetainedMessageSummary extends SpeakeasyBase {
    lastModifiedTime?: number;
    payloadSize?: number;
    qos?: number;
    topic?: string;
}
