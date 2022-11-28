import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
/**
 * An object that contains the resource type and the number of resources.
**/
export declare class ResourceCount extends SpeakeasyBase {
    count?: number;
    resourceType?: ResourceTypeEnum;
}
