import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeUserPoolClientRequest
/** 
 * Represents the request to describe a user pool client.
**/
export class DescribeUserPoolClientRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientId" })
  clientId: string;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
