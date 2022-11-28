import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBackendResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AmplifyMetaConfig" })
  amplifyMetaConfig?: string;

  @SpeakeasyMetadata({ data: "json, name=AppId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=AppName" })
  appName?: string;

  @SpeakeasyMetadata({ data: "json, name=BackendEnvironmentList" })
  backendEnvironmentList?: string[];

  @SpeakeasyMetadata({ data: "json, name=BackendEnvironmentName" })
  backendEnvironmentName?: string;

  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: string;
}
