import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AnalysisResult } from "./analysisresult";
export declare class GetDetectorModelAnalysisResultsResponse extends SpeakeasyBase {
    analysisResults?: AnalysisResult[];
    nextToken?: string;
}
