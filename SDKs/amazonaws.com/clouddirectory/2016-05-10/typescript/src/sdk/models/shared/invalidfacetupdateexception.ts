import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InvalidFacetUpdateException
/** 
 * An attempt to modify a <a>Facet</a> resulted in an invalid schema exception.
**/
export class InvalidFacetUpdateException extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}
