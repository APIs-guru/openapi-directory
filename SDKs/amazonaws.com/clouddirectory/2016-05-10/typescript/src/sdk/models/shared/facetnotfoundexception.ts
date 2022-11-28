import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FacetNotFoundException
/** 
 * The specified <a>Facet</a> could not be found.
**/
export class FacetNotFoundException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
