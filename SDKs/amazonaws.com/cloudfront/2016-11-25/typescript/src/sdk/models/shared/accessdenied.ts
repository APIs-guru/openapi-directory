import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccessDenied
/** 
 * Access denied.
**/
export class AccessDenied extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
