import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DetectorModelConfiguration } from "./detectormodelconfiguration";
import { DetectorModelDefinition } from "./detectormodeldefinition";


// DetectorModel
/** 
 * Information about the detector model.
**/
export class DetectorModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=detectorModelConfiguration" })
  detectorModelConfiguration?: DetectorModelConfiguration;

  @Metadata({ data: "json, name=detectorModelDefinition" })
  detectorModelDefinition?: DetectorModelDefinition;
}
