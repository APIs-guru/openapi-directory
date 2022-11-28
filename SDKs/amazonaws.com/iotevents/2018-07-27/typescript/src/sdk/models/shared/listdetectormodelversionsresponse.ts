import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DetectorModelVersionSummary } from "./detectormodelversionsummary";



export class ListDetectorModelVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detectorModelVersionSummaries", elemType: DetectorModelVersionSummary })
  detectorModelVersionSummaries?: DetectorModelVersionSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
