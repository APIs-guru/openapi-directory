import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetEc2RecommendationProjectedMetricsXAmzTargetEnum {
    ComputeOptimizerServiceGetEc2RecommendationProjectedMetrics = "ComputeOptimizerService.GetEC2RecommendationProjectedMetrics"
}


export class GetEc2RecommendationProjectedMetricsHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetEc2RecommendationProjectedMetricsXAmzTargetEnum;
}


export class GetEc2RecommendationProjectedMetricsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetEc2RecommendationProjectedMetricsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetEc2RecommendationProjectedMetricsRequest;
}


export class GetEc2RecommendationProjectedMetricsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getEc2RecommendationProjectedMetricsResponse?: shared.GetEc2RecommendationProjectedMetricsResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  missingAuthenticationToken?: any;

  @Metadata()
  optInRequiredException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
