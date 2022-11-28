import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request object for this operation.
**/
export declare class LoginAuthConfigReqObj extends SpeakeasyBase {
    awsCognitoIdentityPoolId?: string;
    awsCognitoRegion?: string;
    awsUserPoolsId?: string;
    awsUserPoolsWebClientId?: string;
}
