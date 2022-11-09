import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeScalingPlansXAmzTargetEnum {
    AnyScaleScalingPlannerFrontendServiceDescribeScalingPlans = "AnyScaleScalingPlannerFrontendService.DescribeScalingPlans"
}


export class DescribeScalingPlansHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeScalingPlansXAmzTargetEnum;
}


export class DescribeScalingPlansRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeScalingPlansHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeScalingPlansRequest;
}


export class DescribeScalingPlansResponse extends SpeakeasyBase {
  @Metadata()
  concurrentUpdateException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeScalingPlansResponse?: shared.DescribeScalingPlansResponse;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
