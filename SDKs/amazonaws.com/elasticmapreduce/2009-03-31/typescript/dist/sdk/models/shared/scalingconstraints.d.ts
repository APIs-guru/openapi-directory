import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The upper and lower EC2 instance limits for an automatic scaling policy. Automatic scaling activities triggered by automatic scaling rules will not cause an instance group to grow above or below these limits.
**/
export declare class ScalingConstraints extends SpeakeasyBase {
    maxCapacity: number;
    minCapacity: number;
}
