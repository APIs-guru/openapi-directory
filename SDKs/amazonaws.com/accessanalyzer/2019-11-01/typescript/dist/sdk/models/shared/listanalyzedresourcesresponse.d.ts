import { SpeakeasyBase } from "../../../internal/utils";
import { AnalyzedResourceSummary } from "./analyzedresourcesummary";
/**
 * The response to the request.
**/
export declare class ListAnalyzedResourcesResponse extends SpeakeasyBase {
    analyzedResources: AnalyzedResourceSummary[];
    nextToken?: string;
}
