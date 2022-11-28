import { SpeakeasyBase } from "../../../internal/utils";
import { AnalysisResultLevelEnum } from "./analysisresultlevelenum";
import { AnalysisResultLocation } from "./analysisresultlocation";
/**
 * Contains the result of the analysis.
**/
export declare class AnalysisResult extends SpeakeasyBase {
    level?: AnalysisResultLevelEnum;
    locations?: AnalysisResultLocation[];
    message?: string;
    type?: string;
}
