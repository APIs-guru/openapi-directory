import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the preferences for an instance refresh.
**/
export declare class RefreshPreferences extends SpeakeasyBase {
    checkpointDelay?: number;
    checkpointPercentages?: number[];
    instanceWarmup?: number;
    minHealthyPercentage?: number;
    skipMatching?: boolean;
}
