import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MessageFormatValueEnum } from "./messageformatvalueenum";


// KinesisSettings
/** 
 * Provides information that describes an Amazon Kinesis Data Stream endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information.
**/
export class KinesisSettings extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=NoHexPrefix" })
  noHexPrefix?: boolean;

  @Metadata({ data: "json, name=PartitionIncludeSchemaTable" })
  partitionIncludeSchemaTable?: boolean;

  @Metadata({ data: "json, name=ServiceAccessRoleArn" })
  serviceAccessRoleArn?: string;

  @Metadata({ data: "json, name=StreamArn" })
  streamArn?: string;
}
