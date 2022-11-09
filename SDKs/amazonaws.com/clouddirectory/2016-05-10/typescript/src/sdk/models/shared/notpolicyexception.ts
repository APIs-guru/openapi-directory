import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NotPolicyException
/** 
 * Indicates that the requested operation can only operate on policy objects.
**/
export class NotPolicyException extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}
