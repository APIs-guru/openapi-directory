import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConfirmDeviceResponse
/** 
 * Confirms the device response.
**/
export class ConfirmDeviceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=UserConfirmationNecessary" })
  userConfirmationNecessary?: boolean;
}
