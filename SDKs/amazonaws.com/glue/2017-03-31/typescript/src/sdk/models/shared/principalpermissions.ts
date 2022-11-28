import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PermissionEnum } from "./permissionenum";
import { DataLakePrincipal } from "./datalakeprincipal";



// PrincipalPermissions
/** 
 * Permissions granted to a principal.
**/
export class PrincipalPermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Permissions" })
  permissions?: PermissionEnum[];

  @SpeakeasyMetadata({ data: "json, name=Principal" })
  principal?: DataLakePrincipal;
}
