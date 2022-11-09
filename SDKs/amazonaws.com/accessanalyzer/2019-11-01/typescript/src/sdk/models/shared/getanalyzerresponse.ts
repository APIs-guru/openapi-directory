import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AnalyzerSummary } from "./analyzersummary";


// GetAnalyzerResponse
/** 
 * The response to the request.
**/
export class GetAnalyzerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=analyzer" })
  analyzer: AnalyzerSummary;
}
