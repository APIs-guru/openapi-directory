import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateBackendAuthIdentityPoolConfig
/** 
 * Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.
**/
export class UpdateBackendAuthIdentityPoolConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=UnauthenticatedLogin" })
  unauthenticatedLogin?: boolean;
}
