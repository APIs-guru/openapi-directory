import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CognitoStreams } from "./cognitostreams";
import { PushSync } from "./pushsync";



// GetIdentityPoolConfigurationResponse
/** 
 * The output for the GetIdentityPoolConfiguration operation.
**/
export class GetIdentityPoolConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CognitoStreams" })
  cognitoStreams?: CognitoStreams;

  @SpeakeasyMetadata({ data: "json, name=IdentityPoolId" })
  identityPoolId?: string;

  @SpeakeasyMetadata({ data: "json, name=PushSync" })
  pushSync?: PushSync;
}
