import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnalyzerSummary } from "./analyzersummary";



// ListAnalyzersResponse
/** 
 * The response to the request.
**/
export class ListAnalyzersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analyzers", elemType: AnalyzerSummary })
  analyzers: AnalyzerSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
