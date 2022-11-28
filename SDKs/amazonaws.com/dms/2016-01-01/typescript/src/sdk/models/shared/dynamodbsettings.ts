import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DynamoDbSettings
/** 
 * Provides the Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role used to define an Amazon DynamoDB target endpoint.
**/
export class DynamoDbSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServiceAccessRoleArn" })
  serviceAccessRoleArn: string;
}
