import { SpeakeasyBase } from "../../../internal/utils";
import { MessageFormatValueEnum } from "./messageformatvalueenum";
/**
 * Provides information that describes an Amazon Kinesis Data Stream endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information.
**/
export declare class KinesisSettings extends SpeakeasyBase {
    includeControlDetails?: boolean;
    includeNullAndEmpty?: boolean;
    includePartitionValue?: boolean;
    includeTableAlterOperations?: boolean;
    includeTransactionDetails?: boolean;
    messageFormat?: MessageFormatValueEnum;
    noHexPrefix?: boolean;
    partitionIncludeSchemaTable?: boolean;
    serviceAccessRoleArn?: string;
    streamArn?: string;
}
