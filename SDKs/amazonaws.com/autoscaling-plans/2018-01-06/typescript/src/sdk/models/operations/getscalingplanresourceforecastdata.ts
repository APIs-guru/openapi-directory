import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetScalingPlanResourceForecastDataXAmzTargetEnum {
    AnyScaleScalingPlannerFrontendServiceGetScalingPlanResourceForecastData = "AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData"
}


export class GetScalingPlanResourceForecastDataHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetScalingPlanResourceForecastDataXAmzTargetEnum;
}


export class GetScalingPlanResourceForecastDataRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetScalingPlanResourceForecastDataHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetScalingPlanResourceForecastDataRequest;
}


export class GetScalingPlanResourceForecastDataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getScalingPlanResourceForecastDataResponse?: shared.GetScalingPlanResourceForecastDataResponse;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
