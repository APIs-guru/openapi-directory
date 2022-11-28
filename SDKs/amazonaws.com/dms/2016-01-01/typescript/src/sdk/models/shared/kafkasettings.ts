import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MessageFormatValueEnum } from "./messageformatvalueenum";
import { KafkaSecurityProtocolEnum } from "./kafkasecurityprotocolenum";



// KafkaSettings
/** 
 * Provides information that describes an Apache Kafka endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information.
**/
export class KafkaSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Broker" })
  broker?: string;

  @SpeakeasyMetadata({ data: "json, name=IncludeControlDetails" })
  includeControlDetails?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IncludeNullAndEmpty" })
  includeNullAndEmpty?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IncludePartitionValue" })
  includePartitionValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IncludeTableAlterOperations" })
  includeTableAlterOperations?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IncludeTransactionDetails" })
  includeTransactionDetails?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MessageFormat" })
  messageFormat?: MessageFormatValueEnum;

  @SpeakeasyMetadata({ data: "json, name=MessageMaxBytes" })
  messageMaxBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=NoHexPrefix" })
  noHexPrefix?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PartitionIncludeSchemaTable" })
  partitionIncludeSchemaTable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SaslPassword" })
  saslPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=SaslUsername" })
  saslUsername?: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityProtocol" })
  securityProtocol?: KafkaSecurityProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=SslCaCertificateArn" })
  sslCaCertificateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SslClientCertificateArn" })
  sslClientCertificateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SslClientKeyArn" })
  sslClientKeyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SslClientKeyPassword" })
  sslClientKeyPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=Topic" })
  topic?: string;
}
