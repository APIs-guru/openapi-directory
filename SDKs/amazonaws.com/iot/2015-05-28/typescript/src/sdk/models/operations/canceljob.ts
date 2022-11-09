import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CancelJobPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;
}


export class CancelJobQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=force" })
  force?: boolean;
}


export class CancelJobHeaders extends SpeakeasyBase {
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


export class CancelJobRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=reasonCode" })
  reasonCode?: string;
}


export class CancelJobRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CancelJobPathParams;

  @Metadata()
  queryParams: CancelJobQueryParams;

  @Metadata()
  headers: CancelJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CancelJobRequestBody;
}


export class CancelJobResponse extends SpeakeasyBase {
  @Metadata()
  cancelJobResponse?: shared.CancelJobResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
