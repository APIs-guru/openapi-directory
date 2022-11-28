import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DetectorModelConfiguration } from "./detectormodelconfiguration";
import { DetectorModelDefinition } from "./detectormodeldefinition";



// DetectorModel
/** 
 * Information about the detector model.
**/
export class DetectorModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detectorModelConfiguration" })
  detectorModelConfiguration?: DetectorModelConfiguration;

  @SpeakeasyMetadata({ data: "json, name=detectorModelDefinition" })
  detectorModelDefinition?: DetectorModelDefinition;
}
