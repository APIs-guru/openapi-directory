import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DetectorStateSummary
/** 
 * Information about the detector state.
**/
export class DetectorStateSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=stateName" })
  stateName?: string;
}
