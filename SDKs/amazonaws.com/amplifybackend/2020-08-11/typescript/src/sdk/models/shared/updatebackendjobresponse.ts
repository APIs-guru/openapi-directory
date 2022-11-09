import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateBackendJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppId" })
  appId?: string;

  @Metadata({ data: "json, name=BackendEnvironmentName" })
  backendEnvironmentName?: string;

  @Metadata({ data: "json, name=CreateTime" })
  createTime?: string;

  @Metadata({ data: "json, name=Error" })
  error?: string;

  @Metadata({ data: "json, name=JobId" })
  jobId?: string;

  @Metadata({ data: "json, name=Operation" })
  operation?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=UpdateTime" })
  updateTime?: string;
}
