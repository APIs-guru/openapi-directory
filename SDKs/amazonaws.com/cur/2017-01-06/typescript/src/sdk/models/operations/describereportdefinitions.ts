import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeReportDefinitionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeReportDefinitionsXAmzTargetEnum {
    AwsOrigamiServiceGatewayServiceDescribeReportDefinitions = "AWSOrigamiServiceGatewayService.DescribeReportDefinitions"
}


export class DescribeReportDefinitionsHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: DescribeReportDefinitionsXAmzTargetEnum;
}


export class DescribeReportDefinitionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeReportDefinitionsQueryParams;

  @Metadata()
  headers: DescribeReportDefinitionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeReportDefinitionsRequest;
}


export class DescribeReportDefinitionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeReportDefinitionsResponse?: shared.DescribeReportDefinitionsResponse;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  statusCode: number;
}
