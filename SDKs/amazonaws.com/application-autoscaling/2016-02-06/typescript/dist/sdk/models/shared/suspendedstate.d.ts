import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Specifies whether the scaling activities for a scalable target are in a suspended state.
**/
export declare class SuspendedState extends SpeakeasyBase {
    dynamicScalingInSuspended?: boolean;
    dynamicScalingOutSuspended?: boolean;
    scheduledScalingSuspended?: boolean;
}
