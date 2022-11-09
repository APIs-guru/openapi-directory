import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdminResetUserPasswordRequest
/** 
 * Represents the request to reset a user's password as an administrator.
**/
export class AdminResetUserPasswordRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientMetadata" })
  clientMetadata?: Map<string, string>;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @Metadata({ data: "json, name=Username" })
  username: string;
}
