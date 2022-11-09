import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Permission
/** 
 * The <code>Permission</code> structure.
**/
export class Permission extends SpeakeasyBase {
  @Metadata({ data: "json, name=Access" })
  access?: string[];

  @Metadata({ data: "json, name=Grantee" })
  grantee?: string;

  @Metadata({ data: "json, name=GranteeType" })
  granteeType?: string;
}
