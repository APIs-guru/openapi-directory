import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DetectorModelSummary
/** 
 * Information about the detector model.
**/
export class DetectorModelSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=detectorModelDescription" })
  detectorModelDescription?: string;

  @Metadata({ data: "json, name=detectorModelName" })
  detectorModelName?: string;
}
