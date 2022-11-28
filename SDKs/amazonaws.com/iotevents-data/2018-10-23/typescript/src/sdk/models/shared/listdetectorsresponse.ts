import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DetectorSummary } from "./detectorsummary";



export class ListDetectorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detectorSummaries", elemType: DetectorSummary })
  detectorSummaries?: DetectorSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
