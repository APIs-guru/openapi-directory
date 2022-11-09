import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VerifyUserAttributeRequest
/** 
 * Represents the request to verify user attributes.
**/
export class VerifyUserAttributeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessToken" })
  accessToken: string;

  @Metadata({ data: "json, name=AttributeName" })
  attributeName: string;

  @Metadata({ data: "json, name=Code" })
  code: string;
}
