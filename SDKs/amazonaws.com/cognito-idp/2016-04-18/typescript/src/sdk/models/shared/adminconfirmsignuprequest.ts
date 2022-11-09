import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdminConfirmSignUpRequest
/** 
 * Represents the request to confirm user registration.
**/
export class AdminConfirmSignUpRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientMetadata" })
  clientMetadata?: Map<string, string>;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @Metadata({ data: "json, name=Username" })
  username: string;
}
