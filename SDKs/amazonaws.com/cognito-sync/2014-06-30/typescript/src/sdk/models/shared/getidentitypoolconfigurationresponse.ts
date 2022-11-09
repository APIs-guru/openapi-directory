import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CognitoStreams } from "./cognitostreams";
import { PushSync } from "./pushsync";


// GetIdentityPoolConfigurationResponse
/** 
 * The output for the GetIdentityPoolConfiguration operation.
**/
export class GetIdentityPoolConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CognitoStreams" })
  cognitoStreams?: CognitoStreams;

  @Metadata({ data: "json, name=IdentityPoolId" })
  identityPoolId?: string;

  @Metadata({ data: "json, name=PushSync" })
  pushSync?: PushSync;
}
