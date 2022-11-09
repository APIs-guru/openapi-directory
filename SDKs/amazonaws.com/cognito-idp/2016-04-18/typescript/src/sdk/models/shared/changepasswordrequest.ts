import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ChangePasswordRequest
/** 
 * Represents the request to change a user password.
**/
export class ChangePasswordRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessToken" })
  accessToken: string;

  @Metadata({ data: "json, name=PreviousPassword" })
  previousPassword: string;

  @Metadata({ data: "json, name=ProposedPassword" })
  proposedPassword: string;
}
