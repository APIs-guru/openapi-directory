import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IdentityDescription } from "./identitydescription";



// ListIdentitiesResponse
/** 
 * The response to a ListIdentities request.
**/
export class ListIdentitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identities", elemType: IdentityDescription })
  identities?: IdentityDescription[];

  @SpeakeasyMetadata({ data: "json, name=IdentityPoolId" })
  identityPoolId?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
