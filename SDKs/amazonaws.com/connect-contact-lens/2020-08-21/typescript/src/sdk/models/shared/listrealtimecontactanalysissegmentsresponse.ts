import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RealtimeContactAnalysisSegment } from "./realtimecontactanalysissegment";


export class ListRealtimeContactAnalysisSegmentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Segments", elemType: shared.RealtimeContactAnalysisSegment })
  segments: RealtimeContactAnalysisSegment[];
}
