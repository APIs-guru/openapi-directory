import { SpeakeasyBase } from "../../../internal/utils";
import { DetectorModelConfiguration } from "./detectormodelconfiguration";
import { DetectorModelDefinition } from "./detectormodeldefinition";
/**
 * Information about the detector model.
**/
export declare class DetectorModel extends SpeakeasyBase {
    detectorModelConfiguration?: DetectorModelConfiguration;
    detectorModelDefinition?: DetectorModelDefinition;
}
