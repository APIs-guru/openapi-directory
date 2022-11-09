import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EventSourceStateEnum } from "./eventsourcestateenum";


// EventSource
/** 
 * A partner event source is created by an SaaS partner. If a customer creates a partner event bus that matches this event source, that Amazon Web Services account can receive events from the partner's applications or services.
**/
export class EventSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=CreatedBy" })
  createdBy?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=ExpirationTime" })
  expirationTime?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=State" })
  state?: EventSourceStateEnum;
}
