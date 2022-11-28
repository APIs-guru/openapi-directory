import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VerifyUserAttributeRequest
/** 
 * Represents the request to verify user attributes.
**/
export class VerifyUserAttributeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=AttributeName" })
  attributeName: string;

  @SpeakeasyMetadata({ data: "json, name=Code" })
  code: string;
}
