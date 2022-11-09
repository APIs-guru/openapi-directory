import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FacetAlreadyExistsException
/** 
 * A facet with the same name already exists.
**/
export class FacetAlreadyExistsException extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}
