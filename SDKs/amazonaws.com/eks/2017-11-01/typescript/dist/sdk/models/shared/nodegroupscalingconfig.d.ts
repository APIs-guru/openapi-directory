import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. When creating a node group, you must specify all or none of the properties. When updating a node group, you can specify any or none of the properties.
**/
export declare class NodegroupScalingConfig extends SpeakeasyBase {
    desiredSize?: number;
    maxSize?: number;
    minSize?: number;
}
