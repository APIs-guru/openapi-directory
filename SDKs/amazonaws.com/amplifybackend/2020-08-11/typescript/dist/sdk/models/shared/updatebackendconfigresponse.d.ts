import { SpeakeasyBase } from "../../../internal/utils";
import { LoginAuthConfigReqObj } from "./loginauthconfigreqobj";
export declare class UpdateBackendConfigResponse extends SpeakeasyBase {
    appId?: string;
    backendManagerAppId?: string;
    error?: string;
    loginAuthConfig?: LoginAuthConfigReqObj;
}
