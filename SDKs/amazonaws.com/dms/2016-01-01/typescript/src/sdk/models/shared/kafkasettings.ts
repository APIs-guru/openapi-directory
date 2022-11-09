import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MessageFormatValueEnum } from "./messageformatvalueenum";
import { KafkaSecurityProtocolEnum } from "./kafkasecurityprotocolenum";


// KafkaSettings
/** 
 * Provides information that describes an Apache Kafka endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information.
**/
export class KafkaSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=Broker" })
  broker?: string;

  @Metadata({ data: "json, name=IncludeControlDetails" })
  includeControlDetails?: boolean;

  @Metadata({ data: "json, name=IncludeNullAndEmpty" })
  includeNullAndEmpty?: boolean;

  @Metadata({ data: "json, name=IncludePartitionValue" })
  includePartitionValue?: boolean;

  @Metadata({ data: "json, name=IncludeTableAlterOperations" })
  includeTableAlterOperations?: boolean;

  @Metadata({ data: "json, name=IncludeTransactionDetails" })
  includeTransactionDetails?: boolean;

  @Metadata({ data: "json, name=MessageFormat" })
  messageFormat?: MessageFormatValueEnum;

  @Metadata({ data: "json, name=MessageMaxBytes" })
  messageMaxBytes?: number;

  @Metadata({ data: "json, name=NoHexPrefix" })
  noHexPrefix?: boolean;

  @Metadata({ data: "json, name=PartitionIncludeSchemaTable" })
  partitionIncludeSchemaTable?: boolean;

  @Metadata({ data: "json, name=SaslPassword" })
  saslPassword?: string;

  @Metadata({ data: "json, name=SaslUsername" })
  saslUsername?: string;

  @Metadata({ data: "json, name=SecurityProtocol" })
  securityProtocol?: KafkaSecurityProtocolEnum;

  @Metadata({ data: "json, name=SslCaCertificateArn" })
  sslCaCertificateArn?: string;

  @Metadata({ data: "json, name=SslClientCertificateArn" })
  sslClientCertificateArn?: string;

  @Metadata({ data: "json, name=SslClientKeyArn" })
  sslClientKeyArn?: string;

  @Metadata({ data: "json, name=SslClientKeyPassword" })
  sslClientKeyPassword?: string;

  @Metadata({ data: "json, name=Topic" })
  topic?: string;
}
