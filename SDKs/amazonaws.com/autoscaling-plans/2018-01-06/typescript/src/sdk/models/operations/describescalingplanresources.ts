import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeScalingPlanResourcesXAmzTargetEnum {
    AnyScaleScalingPlannerFrontendServiceDescribeScalingPlanResources = "AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources"
}


export class DescribeScalingPlanResourcesHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeScalingPlanResourcesXAmzTargetEnum;
}


export class DescribeScalingPlanResourcesRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeScalingPlanResourcesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeScalingPlanResourcesRequest;
}


export class DescribeScalingPlanResourcesResponse extends SpeakeasyBase {
  @Metadata()
  concurrentUpdateException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeScalingPlanResourcesResponse?: shared.DescribeScalingPlanResourcesResponse;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
