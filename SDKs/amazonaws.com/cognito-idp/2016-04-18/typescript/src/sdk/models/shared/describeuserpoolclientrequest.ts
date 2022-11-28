import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeUserPoolClientRequest
/** 
 * Represents the request to describe a user pool client.
**/
export class DescribeUserPoolClientRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
