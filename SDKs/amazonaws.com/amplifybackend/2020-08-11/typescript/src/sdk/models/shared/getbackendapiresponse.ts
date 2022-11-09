import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BackendApiResourceConfig } from "./backendapiresourceconfig";


export class GetBackendApiResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppId" })
  appId?: string;

  @Metadata({ data: "json, name=BackendEnvironmentName" })
  backendEnvironmentName?: string;

  @Metadata({ data: "json, name=Error" })
  error?: string;

  @Metadata({ data: "json, name=ResourceConfig" })
  resourceConfig?: BackendApiResourceConfig;

  @Metadata({ data: "json, name=ResourceName" })
  resourceName?: string;
}
