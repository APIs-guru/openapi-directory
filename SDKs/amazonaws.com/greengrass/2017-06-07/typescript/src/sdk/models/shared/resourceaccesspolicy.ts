import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PermissionEnum } from "./permissionenum";



// ResourceAccessPolicy
/** 
 * A policy used by the function to access a resource.
**/
export class ResourceAccessPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Permission" })
  permission?: PermissionEnum;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;
}
