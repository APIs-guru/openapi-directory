import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CancelJobExecutionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=thingName" })
  thingName: string;
}


export class CancelJobExecutionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=force" })
  force?: boolean;
}


export class CancelJobExecutionHeaders extends SpeakeasyBase {
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


export class CancelJobExecutionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=expectedVersion" })
  expectedVersion?: number;

  @Metadata({ data: "json, name=statusDetails" })
  statusDetails?: Map<string, string>;
}


export class CancelJobExecutionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CancelJobExecutionPathParams;

  @Metadata()
  queryParams: CancelJobExecutionQueryParams;

  @Metadata()
  headers: CancelJobExecutionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CancelJobExecutionRequestBody;
}


export class CancelJobExecutionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  invalidStateTransitionException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  versionConflictException?: any;
}
