import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackendApiResourceConfig } from "./backendapiresourceconfig";



export class GetBackendApiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=BackendEnvironmentName" })
  backendEnvironmentName?: string;

  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceConfig" })
  resourceConfig?: BackendApiResourceConfig;

  @SpeakeasyMetadata({ data: "json, name=ResourceName" })
  resourceName?: string;
}
