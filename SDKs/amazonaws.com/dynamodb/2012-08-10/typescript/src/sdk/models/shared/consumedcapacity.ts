import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Capacity } from "./capacity";
import { Capacity } from "./capacity";
import { Capacity } from "./capacity";


// ConsumedCapacity
/** 
 * The capacity units consumed by an operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the request asked for it. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>.
**/
export class ConsumedCapacity extends SpeakeasyBase {
  @Metadata({ data: "json, name=CapacityUnits" })
  capacityUnits?: number;

  @Metadata({ data: "json, name=GlobalSecondaryIndexes", elemType: shared.Capacity })
  globalSecondaryIndexes?: Map<string, Capacity>;

  @Metadata({ data: "json, name=LocalSecondaryIndexes", elemType: shared.Capacity })
  localSecondaryIndexes?: Map<string, Capacity>;

  @Metadata({ data: "json, name=ReadCapacityUnits" })
  readCapacityUnits?: number;

  @Metadata({ data: "json, name=Table" })
  table?: Capacity;

  @Metadata({ data: "json, name=TableName" })
  tableName?: string;

  @Metadata({ data: "json, name=WriteCapacityUnits" })
  writeCapacityUnits?: number;
}
