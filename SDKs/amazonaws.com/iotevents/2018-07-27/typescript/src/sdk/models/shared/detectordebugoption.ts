import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DetectorDebugOption
/** 
 * The detector model and the specific detectors (instances) for which the logging level is given.
**/
export class DetectorDebugOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detectorModelName" })
  detectorModelName: string;

  @SpeakeasyMetadata({ data: "json, name=keyValue" })
  keyValue?: string;
}
