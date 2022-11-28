import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PermissionEnum } from "./permissionenum";



// ResourceDownloadOwnerSetting
/** 
 * The owner setting for downloaded machine learning resources.
**/
export class ResourceDownloadOwnerSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GroupOwner" })
  groupOwner: string;

  @SpeakeasyMetadata({ data: "json, name=GroupPermission" })
  groupPermission: PermissionEnum;
}
