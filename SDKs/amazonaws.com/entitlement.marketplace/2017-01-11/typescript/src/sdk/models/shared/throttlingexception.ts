import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ThrottlingException
/** 
 * The calls to the GetEntitlements API are throttled.
**/
export class ThrottlingException extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}
