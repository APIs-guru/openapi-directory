import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserPoolClientDescription } from "./userpoolclientdescription";



// ListUserPoolClientsResponse
/** 
 * Represents the response from the server that lists user pool clients.
**/
export class ListUserPoolClientsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=UserPoolClients", elemType: UserPoolClientDescription })
  userPoolClients?: UserPoolClientDescription[];
}
