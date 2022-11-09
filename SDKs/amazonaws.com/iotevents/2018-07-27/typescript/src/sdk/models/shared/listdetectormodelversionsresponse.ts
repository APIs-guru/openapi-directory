import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DetectorModelVersionSummary } from "./detectormodelversionsummary";


export class ListDetectorModelVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=detectorModelVersionSummaries", elemType: shared.DetectorModelVersionSummary })
  detectorModelVersionSummaries?: DetectorModelVersionSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
