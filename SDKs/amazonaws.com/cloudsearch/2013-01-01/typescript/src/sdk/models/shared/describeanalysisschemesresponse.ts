import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnalysisSchemeStatus } from "./analysisschemestatus";



// DescribeAnalysisSchemesResponse
/** 
 * The result of a <code>DescribeAnalysisSchemes</code> request. Contains the analysis schemes configured for the domain specified in the request.
**/
export class DescribeAnalysisSchemesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AnalysisSchemeStatus })
  analysisSchemes: AnalysisSchemeStatus[];
}
