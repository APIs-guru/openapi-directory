import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Permission
/** 
 * The <code>Permission</code> structure.
**/
export class Permission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Access" })
  access?: string[];

  @SpeakeasyMetadata({ data: "json, name=Grantee" })
  grantee?: string;

  @SpeakeasyMetadata({ data: "json, name=GranteeType" })
  granteeType?: string;
}
