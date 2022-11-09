import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeComputeEnvironmentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class DescribeComputeEnvironmentsHeaders extends SpeakeasyBase {
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


export class DescribeComputeEnvironmentsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=computeEnvironments" })
  computeEnvironments?: string[];

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}


export class DescribeComputeEnvironmentsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeComputeEnvironmentsQueryParams;

  @Metadata()
  headers: DescribeComputeEnvironmentsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DescribeComputeEnvironmentsRequestBody;
}


export class DescribeComputeEnvironmentsResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeComputeEnvironmentsResponse?: shared.DescribeComputeEnvironmentsResponse;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;
}
