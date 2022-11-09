import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeType } from "./attributetype";


// AdminUpdateUserAttributesRequest
/** 
 * Represents the request to update the user's attributes as an administrator.
**/
export class AdminUpdateUserAttributesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientMetadata" })
  clientMetadata?: Map<string, string>;

  @Metadata({ data: "json, name=UserAttributes", elemType: shared.AttributeType })
  userAttributes: AttributeType[];

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @Metadata({ data: "json, name=Username" })
  username: string;
}
