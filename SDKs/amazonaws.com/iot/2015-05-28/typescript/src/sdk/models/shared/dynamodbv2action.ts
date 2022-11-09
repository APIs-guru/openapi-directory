import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PutItemInput } from "./putiteminput";


// DynamoDBv2Action
/** 
 * <p>Describes an action to write to a DynamoDB table.</p> <p>This DynamoDB action writes each attribute in the message payload into it's own column in the DynamoDB table.</p>
**/
export class DynamoDBv2Action extends SpeakeasyBase {
  @Metadata({ data: "json, name=putItem" })
  putItem: PutItemInput;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;
}
