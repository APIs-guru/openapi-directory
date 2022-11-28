import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FacetInUseException
/** 
 * Occurs when deleting a facet that contains an attribute that is a target to an attribute reference in a different facet.
**/
export class FacetInUseException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
