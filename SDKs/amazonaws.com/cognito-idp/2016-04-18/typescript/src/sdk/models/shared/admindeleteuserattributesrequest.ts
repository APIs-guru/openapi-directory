import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdminDeleteUserAttributesRequest
/** 
 * Represents the request to delete user attributes as an administrator.
**/
export class AdminDeleteUserAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UserAttributeNames" })
  userAttributeNames: string[];

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username: string;
}
