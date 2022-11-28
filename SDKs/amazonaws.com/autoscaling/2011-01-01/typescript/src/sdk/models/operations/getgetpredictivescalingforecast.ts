import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetPredictiveScalingForecastActionEnum {
    GetPredictiveScalingForecast = "GetPredictiveScalingForecast"
}

export enum GetGetPredictiveScalingForecastVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetGetPredictiveScalingForecastQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetPredictiveScalingForecastActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndTime" })
  endTime: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PolicyName" })
  policyName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartTime" })
  startTime: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetPredictiveScalingForecastVersionEnum;
}


export class GetGetPredictiveScalingForecastHeaders extends SpeakeasyBase {
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
}


export class GetGetPredictiveScalingForecastRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetPredictiveScalingForecastQueryParams;

  @SpeakeasyMetadata()
  headers: GetGetPredictiveScalingForecastHeaders;
}


export class GetGetPredictiveScalingForecastResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
