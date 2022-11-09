import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AnalyzerSummary } from "./analyzersummary";


// ListAnalyzersResponse
/** 
 * The response to the request.
**/
export class ListAnalyzersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=analyzers", elemType: shared.AnalyzerSummary })
  analyzers: AnalyzerSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
