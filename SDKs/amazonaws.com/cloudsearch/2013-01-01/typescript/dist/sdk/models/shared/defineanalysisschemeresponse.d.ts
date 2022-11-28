import { SpeakeasyBase } from "../../../internal/utils";
import { AnalysisSchemeStatus } from "./analysisschemestatus";
/**
 * The result of a <code><a>DefineAnalysisScheme</a></code> request. Contains the status of the newly-configured analysis scheme.
**/
export declare class DefineAnalysisSchemeResponse extends SpeakeasyBase {
    analysisScheme: AnalysisSchemeStatus;
}
