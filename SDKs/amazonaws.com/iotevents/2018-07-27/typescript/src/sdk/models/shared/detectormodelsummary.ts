import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DetectorModelSummary
/** 
 * Information about the detector model.
**/
export class DetectorModelSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=detectorModelDescription" })
  detectorModelDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=detectorModelName" })
  detectorModelName?: string;
}
