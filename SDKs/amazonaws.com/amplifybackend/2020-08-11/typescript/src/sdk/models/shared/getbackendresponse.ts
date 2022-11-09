import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetBackendResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AmplifyMetaConfig" })
  amplifyMetaConfig?: string;

  @Metadata({ data: "json, name=AppId" })
  appId?: string;

  @Metadata({ data: "json, name=AppName" })
  appName?: string;

  @Metadata({ data: "json, name=BackendEnvironmentList" })
  backendEnvironmentList?: string[];

  @Metadata({ data: "json, name=BackendEnvironmentName" })
  backendEnvironmentName?: string;

  @Metadata({ data: "json, name=Error" })
  error?: string;
}
