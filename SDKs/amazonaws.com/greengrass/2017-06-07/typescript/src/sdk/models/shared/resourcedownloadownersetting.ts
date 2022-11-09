import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PermissionEnum } from "./permissionenum";


// ResourceDownloadOwnerSetting
/** 
 * The owner setting for downloaded machine learning resources.
**/
export class ResourceDownloadOwnerSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=GroupOwner" })
  groupOwner: string;

  @Metadata({ data: "json, name=GroupPermission" })
  groupPermission: PermissionEnum;
}
