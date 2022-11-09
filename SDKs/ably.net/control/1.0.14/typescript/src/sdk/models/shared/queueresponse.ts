import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class QueueResponseAmqp extends SpeakeasyBase {
  @Metadata({ data: "json, name=queueName" })
  queueName?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


// QueueResponseMessages
/** 
 * Details of messages in the queue.
**/
export class QueueResponseMessages extends SpeakeasyBase {
  @Metadata({ data: "json, name=ready" })
  ready?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;

  @Metadata({ data: "json, name=unacknowledged" })
  unacknowledged?: number;
}


export class QueueResponseStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=acknowledgementRate" })
  acknowledgementRate?: number;

  @Metadata({ data: "json, name=deliveryRate" })
  deliveryRate?: number;

  @Metadata({ data: "json, name=publishRate" })
  publishRate?: number;
}


export class QueueResponseStomp extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination?: string;

  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


export class QueueResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=amqp" })
  amqp?: QueueResponseAmqp;

  @Metadata({ data: "json, name=appId" })
  appId?: string;

  @Metadata({ data: "json, name=deadletter" })
  deadletter?: boolean;

  @Metadata({ data: "json, name=deadletterId" })
  deadletterId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=maxLength" })
  maxLength?: number;

  @Metadata({ data: "json, name=messages" })
  messages?: QueueResponseMessages;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=stats" })
  stats?: QueueResponseStats;

  @Metadata({ data: "json, name=stomp" })
  stomp?: QueueResponseStomp;

  @Metadata({ data: "json, name=ttl" })
  ttl?: number;
}
