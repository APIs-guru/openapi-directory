import { SpeakeasyBase } from "../../../internal/utils";
import { DetectorStateDefinition } from "./detectorstatedefinition";
/**
 * Information used to update the detector (instance).
**/
export declare class UpdateDetectorRequest extends SpeakeasyBase {
    detectorModelName: string;
    keyValue?: string;
    messageId: string;
    state: DetectorStateDefinition;
}
