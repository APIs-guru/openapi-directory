import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IdentityPoolShortDescription } from "./identitypoolshortdescription";


// ListIdentityPoolsResponse
/** 
 * The result of a successful ListIdentityPools action.
**/
export class ListIdentityPoolsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=IdentityPools", elemType: shared.IdentityPoolShortDescription })
  identityPools?: IdentityPoolShortDescription[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
