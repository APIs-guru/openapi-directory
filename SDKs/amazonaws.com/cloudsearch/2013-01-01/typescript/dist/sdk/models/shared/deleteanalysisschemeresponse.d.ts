import { SpeakeasyBase } from "../../../internal/utils";
import { AnalysisSchemeStatus } from "./analysisschemestatus";
/**
 * The result of a <code>DeleteAnalysisScheme</code> request. Contains the status of the deleted analysis scheme.
**/
export declare class DeleteAnalysisSchemeResponse extends SpeakeasyBase {
    analysisScheme: AnalysisSchemeStatus;
}
