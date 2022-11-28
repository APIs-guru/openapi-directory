import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConfirmDeviceResponse
/** 
 * Confirms the device response.
**/
export class ConfirmDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UserConfirmationNecessary" })
  userConfirmationNecessary?: boolean;
}
