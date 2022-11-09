import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ExportEc2InstanceRecommendationsXAmzTargetEnum {
    ComputeOptimizerServiceExportEc2InstanceRecommendations = "ComputeOptimizerService.ExportEC2InstanceRecommendations"
}


export class ExportEc2InstanceRecommendationsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ExportEc2InstanceRecommendationsXAmzTargetEnum;
}


export class ExportEc2InstanceRecommendationsRequest extends SpeakeasyBase {
  @Metadata()
  headers: ExportEc2InstanceRecommendationsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ExportEc2InstanceRecommendationsRequest;
}


export class ExportEc2InstanceRecommendationsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  exportEc2InstanceRecommendationsResponse?: shared.ExportEc2InstanceRecommendationsResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  missingAuthenticationToken?: any;

  @Metadata()
  optInRequiredException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
