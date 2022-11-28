import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KafkaAction
/** 
 * Send messages to an Amazon Managed Streaming for Apache Kafka (Amazon MSK) or self-managed Apache Kafka cluster.
**/
export class KafkaAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientProperties" })
  clientProperties: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=destinationArn" })
  destinationArn: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=partition" })
  partition?: string;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic: string;
}
