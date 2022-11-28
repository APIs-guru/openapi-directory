import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateBackendAuthIdentityPoolConfig
/** 
 * Describes authorization configurations for the auth resources, configured as a part of your Amplify project.
**/
export class CreateBackendAuthIdentityPoolConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityPoolName" })
  identityPoolName: string;

  @SpeakeasyMetadata({ data: "json, name=UnauthenticatedLogin" })
  unauthenticatedLogin: boolean;
}
