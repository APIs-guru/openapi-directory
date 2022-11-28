import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
/**
 * The details that identify a resource that is discovered by Config, including the resource type, ID, and (if available) the custom resource name.
**/
export declare class ResourceIdentifier extends SpeakeasyBase {
    resourceDeletionTime?: Date;
    resourceId?: string;
    resourceName?: string;
    resourceType?: ResourceTypeEnum;
}
