import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StartJobPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=branchName" })
  branchName: string;
}


export class StartJobHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}

export enum StartJobRequestBodyJobTypeEnum {
    Release = "RELEASE"
,    Retry = "RETRY"
,    Manual = "MANUAL"
,    WebHook = "WEB_HOOK"
}


export class StartJobRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=commitId" })
  commitId?: string;

  @Metadata({ data: "json, name=commitMessage" })
  commitMessage?: string;

  @Metadata({ data: "json, name=commitTime" })
  commitTime?: Date;

  @Metadata({ data: "json, name=jobId" })
  jobId?: string;

  @Metadata({ data: "json, name=jobReason" })
  jobReason?: string;

  @Metadata({ data: "json, name=jobType" })
  jobType: StartJobRequestBodyJobTypeEnum;
}


export class StartJobRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StartJobPathParams;

  @Metadata()
  headers: StartJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: StartJobRequestBody;
}


export class StartJobResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  startJobResult?: shared.StartJobResult;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedException?: any;
}
