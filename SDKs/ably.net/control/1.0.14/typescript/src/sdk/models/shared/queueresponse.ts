import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class QueueResponseAmqp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=queueName" })
  queueName?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


// QueueResponseMessages
/** 
 * Details of messages in the queue.
**/
export class QueueResponseMessages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ready" })
  ready?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=unacknowledged" })
  unacknowledged?: number;
}


export class QueueResponseStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acknowledgementRate" })
  acknowledgementRate?: number;

  @SpeakeasyMetadata({ data: "json, name=deliveryRate" })
  deliveryRate?: number;

  @SpeakeasyMetadata({ data: "json, name=publishRate" })
  publishRate?: number;
}


export class QueueResponseStomp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: string;

  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


export class QueueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amqp" })
  amqp?: QueueResponseAmqp;

  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=deadletter" })
  deadletter?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deadletterId" })
  deadletterId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=maxLength" })
  maxLength?: number;

  @SpeakeasyMetadata({ data: "json, name=messages" })
  messages?: QueueResponseMessages;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=stats" })
  stats?: QueueResponseStats;

  @SpeakeasyMetadata({ data: "json, name=stomp" })
  stomp?: QueueResponseStomp;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: number;
}
