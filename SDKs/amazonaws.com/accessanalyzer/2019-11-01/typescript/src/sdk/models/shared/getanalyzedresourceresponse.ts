import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnalyzedResource } from "./analyzedresource";



// GetAnalyzedResourceResponse
/** 
 * The response to the request.
**/
export class GetAnalyzedResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: AnalyzedResource;
}
