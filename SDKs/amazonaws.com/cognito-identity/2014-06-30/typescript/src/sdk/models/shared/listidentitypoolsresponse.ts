import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IdentityPoolShortDescription } from "./identitypoolshortdescription";



// ListIdentityPoolsResponse
/** 
 * The result of a successful ListIdentityPools action.
**/
export class ListIdentityPoolsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityPools", elemType: IdentityPoolShortDescription })
  identityPools?: IdentityPoolShortDescription[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
