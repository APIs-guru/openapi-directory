import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DetectorSummary } from "./detectorsummary";


export class ListDetectorsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=detectorSummaries", elemType: shared.DetectorSummary })
  detectorSummaries?: DetectorSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
