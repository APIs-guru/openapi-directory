import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PermissionGroupEnum } from "./permissiongroupenum";



// LoadPermission
/** 
 * Describes a load permission.
**/
export class LoadPermission extends SpeakeasyBase {
  @SpeakeasyMetadata()
  group?: PermissionGroupEnum;

  @SpeakeasyMetadata()
  userId?: string;
}
