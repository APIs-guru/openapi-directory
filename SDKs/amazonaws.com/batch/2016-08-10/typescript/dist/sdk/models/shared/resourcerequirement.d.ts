import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
/**
 * The type and amount of a resource to assign to a container. The supported resources include <code>GPU</code>, <code>MEMORY</code>, and <code>VCPU</code>.
**/
export declare class ResourceRequirement extends SpeakeasyBase {
    type: ResourceTypeEnum;
    value: string;
}
