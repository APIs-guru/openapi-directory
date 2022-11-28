import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeType } from "./attributetype";



// AdminUpdateUserAttributesRequest
/** 
 * Represents the request to update the user's attributes as an administrator.
**/
export class AdminUpdateUserAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientMetadata" })
  clientMetadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=UserAttributes", elemType: AttributeType })
  userAttributes: AttributeType[];

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username: string;
}
