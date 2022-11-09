import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IdentityPoolShortDescription
/** 
 * A description of the identity pool.
**/
export class IdentityPoolShortDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=IdentityPoolId" })
  identityPoolId?: string;

  @Metadata({ data: "json, name=IdentityPoolName" })
  identityPoolName?: string;
}
