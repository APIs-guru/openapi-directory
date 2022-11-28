import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CancelJobExecutionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=thingName" })
  thingName: string;
}


export class CancelJobExecutionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force" })
  force?: boolean;
}


export class CancelJobExecutionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class CancelJobExecutionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expectedVersion" })
  expectedVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=statusDetails" })
  statusDetails?: Map<string, string>;
}


export class CancelJobExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CancelJobExecutionPathParams;

  @SpeakeasyMetadata()
  queryParams: CancelJobExecutionQueryParams;

  @SpeakeasyMetadata()
  headers: CancelJobExecutionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CancelJobExecutionRequestBody;
}


export class CancelJobExecutionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  invalidStateTransitionException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  versionConflictException?: any;
}
