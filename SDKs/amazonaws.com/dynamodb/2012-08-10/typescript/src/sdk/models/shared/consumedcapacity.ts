import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Capacity } from "./capacity";



// ConsumedCapacity
/** 
 * The capacity units consumed by an operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the request asked for it. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>.
**/
export class ConsumedCapacity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CapacityUnits" })
  capacityUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=GlobalSecondaryIndexes", elemType: Capacity })
  globalSecondaryIndexes?: Map<string, Capacity>;

  @SpeakeasyMetadata({ data: "json, name=LocalSecondaryIndexes", elemType: Capacity })
  localSecondaryIndexes?: Map<string, Capacity>;

  @SpeakeasyMetadata({ data: "json, name=ReadCapacityUnits" })
  readCapacityUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=Table" })
  table?: Capacity;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName?: string;

  @SpeakeasyMetadata({ data: "json, name=WriteCapacityUnits" })
  writeCapacityUnits?: number;
}
