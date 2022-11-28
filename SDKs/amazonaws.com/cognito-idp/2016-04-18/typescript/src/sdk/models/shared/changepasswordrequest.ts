import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChangePasswordRequest
/** 
 * Represents the request to change a user password.
**/
export class ChangePasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=PreviousPassword" })
  previousPassword: string;

  @SpeakeasyMetadata({ data: "json, name=ProposedPassword" })
  proposedPassword: string;
}
