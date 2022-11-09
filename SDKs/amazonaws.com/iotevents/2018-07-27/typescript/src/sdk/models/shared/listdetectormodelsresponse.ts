import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DetectorModelSummary } from "./detectormodelsummary";


export class ListDetectorModelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=detectorModelSummaries", elemType: shared.DetectorModelSummary })
  detectorModelSummaries?: DetectorModelSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
