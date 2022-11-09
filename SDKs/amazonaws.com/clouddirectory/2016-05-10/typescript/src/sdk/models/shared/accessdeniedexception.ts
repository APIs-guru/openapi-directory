import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccessDeniedException
/** 
 * Access denied. Check your permissions.
**/
export class AccessDeniedException extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}
