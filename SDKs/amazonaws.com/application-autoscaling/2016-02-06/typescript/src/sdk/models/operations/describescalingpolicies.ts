import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeScalingPoliciesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum DescribeScalingPoliciesXAmzTargetEnum {
    AnyScaleFrontendServiceDescribeScalingPolicies = "AnyScaleFrontendService.DescribeScalingPolicies"
}


export class DescribeScalingPoliciesHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeScalingPoliciesXAmzTargetEnum;
}


export class DescribeScalingPoliciesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DescribeScalingPoliciesQueryParams;

  @Metadata()
  headers: DescribeScalingPoliciesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeScalingPoliciesRequest;
}


export class DescribeScalingPoliciesResponse extends SpeakeasyBase {
  @Metadata()
  concurrentUpdateException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeScalingPoliciesResponse?: shared.DescribeScalingPoliciesResponse;

  @Metadata()
  failedResourceAccessException?: any;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
