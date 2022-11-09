import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MessageFormatValueEnum } from "./messageformatvalueenum";
import { KafkaSecurityProtocolEnum } from "./kafkasecurityprotocolenum";
/**
 * Provides information that describes an Apache Kafka endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information.
**/
export declare class KafkaSettings extends SpeakeasyBase {
    broker?: string;
    includeControlDetails?: boolean;
    includeNullAndEmpty?: boolean;
    includePartitionValue?: boolean;
    includeTableAlterOperations?: boolean;
    includeTransactionDetails?: boolean;
    messageFormat?: MessageFormatValueEnum;
    messageMaxBytes?: number;
    noHexPrefix?: boolean;
    partitionIncludeSchemaTable?: boolean;
    saslPassword?: string;
    saslUsername?: string;
    securityProtocol?: KafkaSecurityProtocolEnum;
    sslCaCertificateArn?: string;
    sslClientCertificateArn?: string;
    sslClientKeyArn?: string;
    sslClientKeyPassword?: string;
    topic?: string;
}
