import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Reports the progress of an instance refresh on instances that are in the Auto Scaling group.
**/
export declare class InstanceRefreshLivePoolProgress extends SpeakeasyBase {
    instancesToUpdate?: number;
    percentageComplete?: number;
}
