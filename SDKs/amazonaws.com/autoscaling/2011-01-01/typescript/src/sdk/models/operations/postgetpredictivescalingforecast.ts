import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostGetPredictiveScalingForecastActionEnum {
    GetPredictiveScalingForecast = "GetPredictiveScalingForecast"
}

export enum PostGetPredictiveScalingForecastVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class PostGetPredictiveScalingForecastQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostGetPredictiveScalingForecastActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostGetPredictiveScalingForecastVersionEnum;
}


export class PostGetPredictiveScalingForecastHeaders extends SpeakeasyBase {
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


export class PostGetPredictiveScalingForecastRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostGetPredictiveScalingForecastQueryParams;

  @SpeakeasyMetadata()
  headers: PostGetPredictiveScalingForecastHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostGetPredictiveScalingForecastResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
