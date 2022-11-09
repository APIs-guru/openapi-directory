import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FacetNotFoundException
/** 
 * The specified <a>Facet</a> could not be found.
**/
export class FacetNotFoundException extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}
