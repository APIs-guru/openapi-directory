import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DetectorStateSummary } from "./detectorstatesummary";



// DetectorSummary
/** 
 * Information about the detector (instance).
**/
export class DetectorSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=detectorModelName" })
  detectorModelName?: string;

  @SpeakeasyMetadata({ data: "json, name=detectorModelVersion" })
  detectorModelVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=keyValue" })
  keyValue?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: DetectorStateSummary;
}
