import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdentityPoolShortDescription
/** 
 * A description of the identity pool.
**/
export class IdentityPoolShortDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityPoolId" })
  identityPoolId?: string;

  @SpeakeasyMetadata({ data: "json, name=IdentityPoolName" })
  identityPoolName?: string;
}
