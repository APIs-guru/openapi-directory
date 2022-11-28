import { SpeakeasyBase } from "../../../internal/utils";
import { VolumeConfiguration } from "./volumeconfiguration";
/**
 * Describes a recommendation option for an Amazon Elastic Block Store (Amazon EBS) instance.
**/
export declare class VolumeRecommendationOption extends SpeakeasyBase {
    configuration?: VolumeConfiguration;
    performanceRisk?: number;
    rank?: number;
}
