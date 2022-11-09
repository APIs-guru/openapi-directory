import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DetectorDebugOption
/** 
 * The detector model and the specific detectors (instances) for which the logging level is given.
**/
export class DetectorDebugOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=detectorModelName" })
  detectorModelName: string;

  @Metadata({ data: "json, name=keyValue" })
  keyValue?: string;
}
