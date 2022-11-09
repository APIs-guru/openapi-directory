import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";


// ResourceIdentifier
/** 
 * The details that identify a resource that is discovered by Config, including the resource type, ID, and (if available) the custom resource name.
**/
export class ResourceIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceDeletionTime" })
  resourceDeletionTime?: Date;

  @Metadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;
}
