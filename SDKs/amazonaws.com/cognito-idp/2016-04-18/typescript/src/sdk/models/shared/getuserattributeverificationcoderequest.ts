import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetUserAttributeVerificationCodeRequest
/** 
 * Represents the request to get user attribute verification.
**/
export class GetUserAttributeVerificationCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=AttributeName" })
  attributeName: string;

  @SpeakeasyMetadata({ data: "json, name=ClientMetadata" })
  clientMetadata?: Map<string, string>;
}
