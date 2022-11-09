import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CognitoStreams } from "./cognitostreams";
import { PushSync } from "./pushsync";
/**
 * The output for the GetIdentityPoolConfiguration operation.
**/
export declare class GetIdentityPoolConfigurationResponse extends SpeakeasyBase {
    cognitoStreams?: CognitoStreams;
    identityPoolId?: string;
    pushSync?: PushSync;
}
