import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StillContainsLinksException
/** 
 * The object could not be deleted because links still exist. Remove the links and then try the operation again.
**/
export class StillContainsLinksException extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}
