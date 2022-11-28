import { SpeakeasyBase } from "../../../internal/utils";
import { CognitoStreams } from "./cognitostreams";
import { PushSync } from "./pushsync";
/**
 * The output for the SetIdentityPoolConfiguration operation
**/
export declare class SetIdentityPoolConfigurationResponse extends SpeakeasyBase {
    cognitoStreams?: CognitoStreams;
    identityPoolId?: string;
    pushSync?: PushSync;
}
