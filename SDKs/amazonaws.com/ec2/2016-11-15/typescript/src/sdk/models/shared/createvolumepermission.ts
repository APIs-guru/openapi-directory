import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PermissionGroupEnum } from "./permissiongroupenum";



// CreateVolumePermission
/** 
 * Describes the user or group to be added or removed from the list of create volume permissions for a volume.
**/
export class CreateVolumePermission extends SpeakeasyBase {
  @SpeakeasyMetadata()
  group?: PermissionGroupEnum;

  @SpeakeasyMetadata()
  userId?: string;
}
