import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DetectorStateSummary
/** 
 * Information about the detector state.
**/
export class DetectorStateSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=stateName" })
  stateName?: string;
}
