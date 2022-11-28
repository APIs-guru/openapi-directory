import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InvalidFacetUpdateException
/** 
 * An attempt to modify a <a>Facet</a> resulted in an invalid schema exception.
**/
export class InvalidFacetUpdateException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
