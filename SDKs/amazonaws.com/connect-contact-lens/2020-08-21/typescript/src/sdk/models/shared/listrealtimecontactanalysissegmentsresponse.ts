import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RealtimeContactAnalysisSegment } from "./realtimecontactanalysissegment";



export class ListRealtimeContactAnalysisSegmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Segments", elemType: RealtimeContactAnalysisSegment })
  segments: RealtimeContactAnalysisSegment[];
}
