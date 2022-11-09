import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdminDeleteUserAttributesRequest
/** 
 * Represents the request to delete user attributes as an administrator.
**/
export class AdminDeleteUserAttributesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=UserAttributeNames" })
  userAttributeNames: string[];

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @Metadata({ data: "json, name=Username" })
  username: string;
}
