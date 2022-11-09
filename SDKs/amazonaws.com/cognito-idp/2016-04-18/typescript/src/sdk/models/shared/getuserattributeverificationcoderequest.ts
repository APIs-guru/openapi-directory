import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetUserAttributeVerificationCodeRequest
/** 
 * Represents the request to get user attribute verification.
**/
export class GetUserAttributeVerificationCodeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessToken" })
  accessToken: string;

  @Metadata({ data: "json, name=AttributeName" })
  attributeName: string;

  @Metadata({ data: "json, name=ClientMetadata" })
  clientMetadata?: Map<string, string>;
}
