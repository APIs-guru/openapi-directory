import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DetectorState } from "./detectorstate";
/**
 * Information about the detector (instance).
**/
export declare class Detector extends SpeakeasyBase {
    creationTime?: Date;
    detectorModelName?: string;
    detectorModelVersion?: string;
    keyValue?: string;
    lastUpdateTime?: Date;
    state?: DetectorState;
}
