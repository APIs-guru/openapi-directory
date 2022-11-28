import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateBackendAuthResourceConfig } from "./createbackendauthresourceconfig";



export class GetBackendAuthResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=BackendEnvironmentName" })
  backendEnvironmentName?: string;

  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceConfig" })
  resourceConfig?: CreateBackendAuthResourceConfig;

  @SpeakeasyMetadata({ data: "json, name=ResourceName" })
  resourceName?: string;
}
