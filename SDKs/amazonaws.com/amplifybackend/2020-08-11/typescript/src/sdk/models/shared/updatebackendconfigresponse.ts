import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoginAuthConfigReqObj } from "./loginauthconfigreqobj";



export class UpdateBackendConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=BackendManagerAppId" })
  backendManagerAppId?: string;

  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=LoginAuthConfig" })
  loginAuthConfig?: LoginAuthConfigReqObj;
}
