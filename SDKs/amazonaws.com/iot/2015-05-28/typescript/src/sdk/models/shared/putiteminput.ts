import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PutItemInput
/** 
 * The input for the DynamoActionVS action that specifies the DynamoDB table to which the message data will be written.
**/
export class PutItemInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tableName" })
  tableName: string;
}
