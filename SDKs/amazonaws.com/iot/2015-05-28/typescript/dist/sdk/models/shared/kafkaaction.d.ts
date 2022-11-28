import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Send messages to an Amazon Managed Streaming for Apache Kafka (Amazon MSK) or self-managed Apache Kafka cluster.
**/
export declare class KafkaAction extends SpeakeasyBase {
    clientProperties: Map<string, string>;
    destinationArn: string;
    key?: string;
    partition?: string;
    topic: string;
}
