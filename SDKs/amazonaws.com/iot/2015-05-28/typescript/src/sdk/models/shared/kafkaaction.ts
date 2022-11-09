import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KafkaAction
/** 
 * Send messages to an Amazon Managed Streaming for Apache Kafka (Amazon MSK) or self-managed Apache Kafka cluster.
**/
export class KafkaAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientProperties" })
  clientProperties: Map<string, string>;

  @Metadata({ data: "json, name=destinationArn" })
  destinationArn: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=partition" })
  partition?: string;

  @Metadata({ data: "json, name=topic" })
  topic: string;
}
