import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PermissionEnum } from "./permissionenum";


// ResourceAccessPolicy
/** 
 * A policy used by the function to access a resource.
**/
export class ResourceAccessPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=Permission" })
  permission?: PermissionEnum;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;
}
