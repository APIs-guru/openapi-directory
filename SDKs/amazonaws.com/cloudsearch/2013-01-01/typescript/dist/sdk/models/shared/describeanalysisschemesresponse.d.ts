import { SpeakeasyBase } from "../../../internal/utils";
import { AnalysisSchemeStatus } from "./analysisschemestatus";
/**
 * The result of a <code>DescribeAnalysisSchemes</code> request. Contains the analysis schemes configured for the domain specified in the request.
**/
export declare class DescribeAnalysisSchemesResponse extends SpeakeasyBase {
    analysisSchemes: AnalysisSchemeStatus[];
}
