import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AnalyzedResourceSummary } from "./analyzedresourcesummary";


// ListAnalyzedResourcesResponse
/** 
 * The response to the request.
**/
export class ListAnalyzedResourcesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=analyzedResources", elemType: shared.AnalyzedResourceSummary })
  analyzedResources: AnalyzedResourceSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
