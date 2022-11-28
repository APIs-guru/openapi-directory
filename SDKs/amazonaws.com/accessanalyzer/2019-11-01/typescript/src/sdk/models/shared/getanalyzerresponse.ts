import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnalyzerSummary } from "./analyzersummary";



// GetAnalyzerResponse
/** 
 * The response to the request.
**/
export class GetAnalyzerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analyzer" })
  analyzer: AnalyzerSummary;
}
