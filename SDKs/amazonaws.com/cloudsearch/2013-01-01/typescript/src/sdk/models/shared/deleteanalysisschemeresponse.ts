import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnalysisSchemeStatus } from "./analysisschemestatus";



// DeleteAnalysisSchemeResponse
/** 
 * The result of a <code>DeleteAnalysisScheme</code> request. Contains the status of the deleted analysis scheme.
**/
export class DeleteAnalysisSchemeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  analysisScheme: AnalysisSchemeStatus;
}
