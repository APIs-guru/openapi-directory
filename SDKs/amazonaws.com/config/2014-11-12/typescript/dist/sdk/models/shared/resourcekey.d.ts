import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
/**
 * The details that identify a resource within Config, including the resource type and resource ID.
**/
export declare class ResourceKey extends SpeakeasyBase {
    resourceId: string;
    resourceType: ResourceTypeEnum;
}
