import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Grantee } from "./grantee";
import { PermissionEnum } from "./permissionenum";


// Grant
/** 
 * Contains information about a grant.
**/
export class Grant extends SpeakeasyBase {
  @Metadata({ data: "json, name=Grantee" })
  grantee?: Grantee;

  @Metadata({ data: "json, name=Permission" })
  permission?: PermissionEnum;
}
