import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccessDeniedException
/** 
 * Access denied. Check your permissions.
**/
export class AccessDeniedException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
