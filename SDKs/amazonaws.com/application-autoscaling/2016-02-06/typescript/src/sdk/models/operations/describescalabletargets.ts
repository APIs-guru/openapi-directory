import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeScalableTargetsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeScalableTargetsXAmzTargetEnum {
    AnyScaleFrontendServiceDescribeScalableTargets = "AnyScaleFrontendService.DescribeScalableTargets"
}


export class DescribeScalableTargetsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeScalableTargetsXAmzTargetEnum;
}


export class DescribeScalableTargetsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeScalableTargetsQueryParams;

  @Metadata()
  headers: DescribeScalableTargetsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeScalableTargetsRequest;
}


export class DescribeScalableTargetsResponse extends SpeakeasyBase {
  @Metadata()
  concurrentUpdateException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeScalableTargetsResponse?: shared.DescribeScalableTargetsResponse;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
