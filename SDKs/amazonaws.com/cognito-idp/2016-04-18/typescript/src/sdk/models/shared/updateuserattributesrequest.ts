import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeType } from "./attributetype";


// UpdateUserAttributesRequest
/** 
 * Represents the request to update user attributes.
**/
export class UpdateUserAttributesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessToken" })
  accessToken: string;

  @Metadata({ data: "json, name=ClientMetadata" })
  clientMetadata?: Map<string, string>;

  @Metadata({ data: "json, name=UserAttributes", elemType: shared.AttributeType })
  userAttributes: AttributeType[];
}
