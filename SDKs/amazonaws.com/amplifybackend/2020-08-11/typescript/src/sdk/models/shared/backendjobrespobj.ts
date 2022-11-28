import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BackendJobRespObj
/** 
 * The response object for this operation.
**/
export class BackendJobRespObj extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppId" })
  appId: string;

  @SpeakeasyMetadata({ data: "json, name=BackendEnvironmentName" })
  backendEnvironmentName: string;

  @SpeakeasyMetadata({ data: "json, name=CreateTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=Operation" })
  operation?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdateTime" })
  updateTime?: string;
}
