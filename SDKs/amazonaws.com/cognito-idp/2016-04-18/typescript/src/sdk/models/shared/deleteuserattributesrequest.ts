import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteUserAttributesRequest
/** 
 * Represents the request to delete user attributes.
**/
export class DeleteUserAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=UserAttributeNames" })
  userAttributeNames: string[];
}
