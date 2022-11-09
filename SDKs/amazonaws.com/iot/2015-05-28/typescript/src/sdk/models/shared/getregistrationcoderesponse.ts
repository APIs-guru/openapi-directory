import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetRegistrationCodeResponse
/** 
 * The output from the GetRegistrationCode operation.
**/
export class GetRegistrationCodeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=registrationCode" })
  registrationCode?: string;
}
