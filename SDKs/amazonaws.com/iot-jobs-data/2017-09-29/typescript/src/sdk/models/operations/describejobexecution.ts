import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeJobExecutionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=thingName" })
  thingName: string;
}


export class DescribeJobExecutionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=executionNumber" })
  executionNumber?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeJobDocument" })
  includeJobDocument?: boolean;
}


export class DescribeJobExecutionHeaders extends SpeakeasyBase {
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


export class DescribeJobExecutionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DescribeJobExecutionPathParams;

  @Metadata()
  queryParams: DescribeJobExecutionQueryParams;

  @Metadata()
  headers: DescribeJobExecutionHeaders;
}


export class DescribeJobExecutionResponse extends SpeakeasyBase {
  @Metadata()
  certificateValidationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeJobExecutionResponse?: shared.DescribeJobExecutionResponse;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  terminalStateException?: any;

  @Metadata()
  throttlingException?: any;
}
