import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DetectorStateSummary } from "./detectorstatesummary";


// DetectorSummary
/** 
 * Information about the detector (instance).
**/
export class DetectorSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=detectorModelName" })
  detectorModelName?: string;

  @Metadata({ data: "json, name=detectorModelVersion" })
  detectorModelVersion?: string;

  @Metadata({ data: "json, name=keyValue" })
  keyValue?: string;

  @Metadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @Metadata({ data: "json, name=state" })
  state?: DetectorStateSummary;
}
