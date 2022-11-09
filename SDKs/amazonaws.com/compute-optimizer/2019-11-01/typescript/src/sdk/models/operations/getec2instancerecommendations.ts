import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetEc2InstanceRecommendationsXAmzTargetEnum {
    ComputeOptimizerServiceGetEc2InstanceRecommendations = "ComputeOptimizerService.GetEC2InstanceRecommendations"
}


export class GetEc2InstanceRecommendationsHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetEc2InstanceRecommendationsXAmzTargetEnum;
}


export class GetEc2InstanceRecommendationsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetEc2InstanceRecommendationsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetEc2InstanceRecommendationsRequest;
}


export class GetEc2InstanceRecommendationsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getEc2InstanceRecommendationsResponse?: shared.GetEc2InstanceRecommendationsResponse;

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
