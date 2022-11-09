import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeCustomMetricPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=metricName" })
  metricName: string;
}


export class DescribeCustomMetricHeaders extends SpeakeasyBase {
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


export class DescribeCustomMetricRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DescribeCustomMetricPathParams;

  @Metadata()
  headers: DescribeCustomMetricHeaders;
}


export class DescribeCustomMetricResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeCustomMetricResponse?: shared.DescribeCustomMetricResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
