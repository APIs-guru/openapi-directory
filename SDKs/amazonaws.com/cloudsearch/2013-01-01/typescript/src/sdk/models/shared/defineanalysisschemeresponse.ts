import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnalysisSchemeStatus } from "./analysisschemestatus";



// DefineAnalysisSchemeResponse
/** 
 * The result of a <code><a>DefineAnalysisScheme</a></code> request. Contains the status of the newly-configured analysis scheme.
**/
export class DefineAnalysisSchemeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  analysisScheme: AnalysisSchemeStatus;
}
