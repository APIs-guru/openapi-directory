import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateBackendAuthIdentityPoolConfig
/** 
 * Describes authorization configurations for the auth resources, configured as a part of your Amplify project.
**/
export class CreateBackendAuthIdentityPoolConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=IdentityPoolName" })
  identityPoolName: string;

  @Metadata({ data: "json, name=UnauthenticatedLogin" })
  unauthenticatedLogin: boolean;
}
