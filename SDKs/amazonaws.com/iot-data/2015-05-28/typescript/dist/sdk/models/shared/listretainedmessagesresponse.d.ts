import { SpeakeasyBase } from "../../../internal/utils";
import { RetainedMessageSummary } from "./retainedmessagesummary";
export declare class ListRetainedMessagesResponse extends SpeakeasyBase {
    nextToken?: string;
    retainedTopics?: RetainedMessageSummary[];
}
