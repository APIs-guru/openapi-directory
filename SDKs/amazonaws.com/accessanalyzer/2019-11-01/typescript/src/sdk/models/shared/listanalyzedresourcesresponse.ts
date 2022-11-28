import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnalyzedResourceSummary } from "./analyzedresourcesummary";



// ListAnalyzedResourcesResponse
/** 
 * The response to the request.
**/
export class ListAnalyzedResourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analyzedResources", elemType: AnalyzedResourceSummary })
  analyzedResources: AnalyzedResourceSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
