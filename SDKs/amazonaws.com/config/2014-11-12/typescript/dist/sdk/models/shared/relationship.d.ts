import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
/**
 * The relationship of the related resource to the main resource.
**/
export declare class Relationship extends SpeakeasyBase {
    relationshipName?: string;
    resourceId?: string;
    resourceName?: string;
    resourceType?: ResourceTypeEnum;
}
