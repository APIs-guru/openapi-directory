import { SpeakeasyBase } from "../../../internal/utils";
export declare class QueueResponseAmqp extends SpeakeasyBase {
    queueName?: string;
    uri?: string;
}
/**
 * Details of messages in the queue.
**/
export declare class QueueResponseMessages extends SpeakeasyBase {
    ready?: number;
    total?: number;
    unacknowledged?: number;
}
export declare class QueueResponseStats extends SpeakeasyBase {
    acknowledgementRate?: number;
    deliveryRate?: number;
    publishRate?: number;
}
export declare class QueueResponseStomp extends SpeakeasyBase {
    destination?: string;
    host?: string;
    uri?: string;
}
export declare class QueueResponse extends SpeakeasyBase {
    amqp?: QueueResponseAmqp;
    appId?: string;
    deadletter?: boolean;
    deadletterId?: string;
    id?: string;
    maxLength?: number;
    messages?: QueueResponseMessages;
    name?: string;
    region?: string;
    state?: string;
    stats?: QueueResponseStats;
    stomp?: QueueResponseStomp;
    ttl?: number;
}
