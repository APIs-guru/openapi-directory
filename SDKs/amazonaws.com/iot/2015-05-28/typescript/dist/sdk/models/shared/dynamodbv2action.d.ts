import { SpeakeasyBase } from "../../../internal/utils";
import { PutItemInput } from "./putiteminput";
/**
 * <p>Describes an action to write to a DynamoDB table.</p> <p>This DynamoDB action writes each attribute in the message payload into it's own column in the DynamoDB table.</p>
**/
export declare class DynamoDBv2Action extends SpeakeasyBase {
    putItem: PutItemInput;
    roleArn: string;
}
