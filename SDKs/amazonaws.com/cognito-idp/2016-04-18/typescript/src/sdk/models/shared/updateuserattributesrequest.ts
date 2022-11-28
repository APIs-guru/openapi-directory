import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeType } from "./attributetype";



// UpdateUserAttributesRequest
/** 
 * Represents the request to update user attributes.
**/
export class UpdateUserAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=ClientMetadata" })
  clientMetadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=UserAttributes", elemType: AttributeType })
  userAttributes: AttributeType[];
}
