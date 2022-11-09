import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CreateBackendAuthResourceConfig } from "./createbackendauthresourceconfig";


export class GetBackendAuthResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppId" })
  appId?: string;

  @Metadata({ data: "json, name=BackendEnvironmentName" })
  backendEnvironmentName?: string;

  @Metadata({ data: "json, name=Error" })
  error?: string;

  @Metadata({ data: "json, name=ResourceConfig" })
  resourceConfig?: CreateBackendAuthResourceConfig;

  @Metadata({ data: "json, name=ResourceName" })
  resourceName?: string;
}
