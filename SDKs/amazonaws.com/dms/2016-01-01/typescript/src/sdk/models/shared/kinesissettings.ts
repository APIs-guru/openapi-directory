import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MessageFormatValueEnum } from "./messageformatvalueenum";



// KinesisSettings
/** 
 * Provides information that describes an Amazon Kinesis Data Stream endpoint. This information includes the output format of records applied to the endpoint and details of transaction and control table data information.
**/
export class KinesisSettings extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=NoHexPrefix" })
  noHexPrefix?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PartitionIncludeSchemaTable" })
  partitionIncludeSchemaTable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ServiceAccessRoleArn" })
  serviceAccessRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=StreamArn" })
  streamArn?: string;
}
