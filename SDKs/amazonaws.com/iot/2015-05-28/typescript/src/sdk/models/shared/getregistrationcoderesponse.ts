import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetRegistrationCodeResponse
/** 
 * The output from the GetRegistrationCode operation.
**/
export class GetRegistrationCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=registrationCode" })
  registrationCode?: string;
}
