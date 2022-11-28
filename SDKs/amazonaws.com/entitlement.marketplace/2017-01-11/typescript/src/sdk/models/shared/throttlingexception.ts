import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ThrottlingException
/** 
 * The calls to the GetEntitlements API are throttled.
**/
export class ThrottlingException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
