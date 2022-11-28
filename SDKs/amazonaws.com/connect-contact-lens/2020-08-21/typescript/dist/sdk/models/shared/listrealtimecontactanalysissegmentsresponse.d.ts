import { SpeakeasyBase } from "../../../internal/utils";
import { RealtimeContactAnalysisSegment } from "./realtimecontactanalysissegment";
export declare class ListRealtimeContactAnalysisSegmentsResponse extends SpeakeasyBase {
    nextToken?: string;
    segments: RealtimeContactAnalysisSegment[];
}
