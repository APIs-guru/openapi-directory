import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PermissionGroupEnum } from "./permissiongroupenum";



// LaunchPermission
/** 
 * Describes a launch permission.
**/
export class LaunchPermission extends SpeakeasyBase {
  @SpeakeasyMetadata()
  group?: PermissionGroupEnum;

  @SpeakeasyMetadata()
  userId?: string;
}
