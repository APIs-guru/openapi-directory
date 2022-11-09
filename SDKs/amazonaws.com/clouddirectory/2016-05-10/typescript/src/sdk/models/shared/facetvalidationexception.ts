import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FacetValidationException
/** 
 * The <a>Facet</a> that you provided was not well formed or could not be validated with the schema.
**/
export class FacetValidationException extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}
