import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserPoolClientType } from "./userpoolclienttype";



// DescribeUserPoolClientResponse
/** 
 * Represents the response from the server from a request to describe the user pool client.
**/
export class DescribeUserPoolClientResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UserPoolClient" })
  userPoolClient?: UserPoolClientType;
}
