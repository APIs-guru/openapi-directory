import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";



// ResourceIdentifier
/** 
 * The details that identify a resource that is discovered by Config, including the resource type, ID, and (if available) the custom resource name.
**/
export class ResourceIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceDeletionTime" })
  resourceDeletionTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;
}
