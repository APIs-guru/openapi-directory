import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateBackendConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppId" })
  appId?: string;

  @Metadata({ data: "json, name=BackendEnvironmentName" })
  backendEnvironmentName?: string;

  @Metadata({ data: "json, name=JobId" })
  jobId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
