import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AnalyzedResource } from "./analyzedresource";


// GetAnalyzedResourceResponse
/** 
 * The response to the request.
**/
export class GetAnalyzedResourceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=resource" })
  resource?: AnalyzedResource;
}
