import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteUserAttributesRequest
/** 
 * Represents the request to delete user attributes.
**/
export class DeleteUserAttributesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessToken" })
  accessToken: string;

  @Metadata({ data: "json, name=UserAttributeNames" })
  userAttributeNames: string[];
}
