import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProvisionedThroughput
/** 
 * <p>Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the <code>UpdateTable</code> operation.</p> <p>For current minimum and maximum provisioned throughput values, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service, Account, and Table Quotas</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
**/
export class ProvisionedThroughput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReadCapacityUnits" })
  readCapacityUnits: number;

  @Metadata({ data: "json, name=WriteCapacityUnits" })
  writeCapacityUnits: number;
}
