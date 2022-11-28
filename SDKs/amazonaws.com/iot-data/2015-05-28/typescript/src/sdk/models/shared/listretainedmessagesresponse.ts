import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RetainedMessageSummary } from "./retainedmessagesummary";



export class ListRetainedMessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=retainedTopics", elemType: RetainedMessageSummary })
  retainedTopics?: RetainedMessageSummary[];
}
