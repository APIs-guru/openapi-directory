import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StillContainsLinksException
/** 
 * The object could not be deleted because links still exist. Remove the links and then try the operation again.
**/
export class StillContainsLinksException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
