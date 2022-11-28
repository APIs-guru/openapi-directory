import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Grantee } from "./grantee";
import { PermissionEnum } from "./permissionenum";



// Grant
/** 
 * Contains information about a grant.
**/
export class Grant extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Grantee" })
  grantee?: Grantee;

  @SpeakeasyMetadata({ data: "json, name=Permission" })
  permission?: PermissionEnum;
}
