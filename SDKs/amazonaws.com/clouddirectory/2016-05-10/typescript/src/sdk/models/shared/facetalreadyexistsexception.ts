import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FacetAlreadyExistsException
/** 
 * A facet with the same name already exists.
**/
export class FacetAlreadyExistsException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
