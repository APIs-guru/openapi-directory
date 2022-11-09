import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RetainedMessageSummary } from "./retainedmessagesummary";


export class ListRetainedMessagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=retainedTopics", elemType: shared.RetainedMessageSummary })
  retainedTopics?: RetainedMessageSummary[];
}
