import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IdentityDescription } from "./identitydescription";


// ListIdentitiesResponse
/** 
 * The response to a ListIdentities request.
**/
export class ListIdentitiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identities", elemType: shared.IdentityDescription })
  identities?: IdentityDescription[];

  @Metadata({ data: "json, name=IdentityPoolId" })
  identityPoolId?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
