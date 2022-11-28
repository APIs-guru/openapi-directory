import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DetectorModelSummary } from "./detectormodelsummary";



export class ListDetectorModelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detectorModelSummaries", elemType: DetectorModelSummary })
  detectorModelSummaries?: DetectorModelSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
