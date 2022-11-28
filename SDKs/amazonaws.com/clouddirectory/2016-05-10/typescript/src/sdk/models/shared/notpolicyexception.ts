import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NotPolicyException
/** 
 * Indicates that the requested operation can only operate on policy objects.
**/
export class NotPolicyException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
