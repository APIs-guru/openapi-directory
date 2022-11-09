import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeConformancePackStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeConformancePackStatusXAmzTargetEnum {
    StarlingDoveServiceDescribeConformancePackStatus = "StarlingDoveService.DescribeConformancePackStatus"
}


export class DescribeConformancePackStatusHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeConformancePackStatusXAmzTargetEnum;
}


export class DescribeConformancePackStatusRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeConformancePackStatusQueryParams;

  @Metadata()
  headers: DescribeConformancePackStatusHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeConformancePackStatusRequest;
}


export class DescribeConformancePackStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeConformancePackStatusResponse?: shared.DescribeConformancePackStatusResponse;

  @Metadata()
  invalidLimitException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  statusCode: number;
}
