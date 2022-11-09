import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoginAuthConfigReqObj } from "./loginauthconfigreqobj";


export class UpdateBackendConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppId" })
  appId?: string;

  @Metadata({ data: "json, name=BackendManagerAppId" })
  backendManagerAppId?: string;

  @Metadata({ data: "json, name=Error" })
  error?: string;

  @Metadata({ data: "json, name=LoginAuthConfig" })
  loginAuthConfig?: LoginAuthConfigReqObj;
}
