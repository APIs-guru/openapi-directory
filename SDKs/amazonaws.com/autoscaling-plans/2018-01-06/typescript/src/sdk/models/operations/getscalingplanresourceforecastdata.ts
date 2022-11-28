import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetScalingPlanResourceForecastDataXAmzTargetEnum {
    AnyScaleScalingPlannerFrontendServiceGetScalingPlanResourceForecastData = "AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData"
}


export class GetScalingPlanResourceForecastDataHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: GetScalingPlanResourceForecastDataXAmzTargetEnum;
}


export class GetScalingPlanResourceForecastDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetScalingPlanResourceForecastDataHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetScalingPlanResourceForecastDataRequest;
}


export class GetScalingPlanResourceForecastDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getScalingPlanResourceForecastDataResponse?: shared.GetScalingPlanResourceForecastDataResponse;

  @SpeakeasyMetadata()
  internalServiceException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
