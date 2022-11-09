import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserPoolClientDescription } from "./userpoolclientdescription";


// ListUserPoolClientsResponse
/** 
 * Represents the response from the server that lists user pool clients.
**/
export class ListUserPoolClientsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=UserPoolClients", elemType: shared.UserPoolClientDescription })
  userPoolClients?: UserPoolClientDescription[];
}
