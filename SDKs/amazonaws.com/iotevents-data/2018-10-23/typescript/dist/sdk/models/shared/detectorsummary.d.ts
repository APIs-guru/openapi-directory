import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DetectorStateSummary } from "./detectorstatesummary";
/**
 * Information about the detector (instance).
**/
export declare class DetectorSummary extends SpeakeasyBase {
    creationTime?: Date;
    detectorModelName?: string;
    detectorModelVersion?: string;
    keyValue?: string;
    lastUpdateTime?: Date;
    state?: DetectorStateSummary;
}
