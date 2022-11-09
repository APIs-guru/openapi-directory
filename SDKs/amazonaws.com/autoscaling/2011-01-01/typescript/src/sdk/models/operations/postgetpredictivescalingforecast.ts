import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostGetPredictiveScalingForecastActionEnum {
    GetPredictiveScalingForecast = "GetPredictiveScalingForecast"
}

export enum PostGetPredictiveScalingForecastVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class PostGetPredictiveScalingForecastQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostGetPredictiveScalingForecastActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostGetPredictiveScalingForecastVersionEnum;
}


export class PostGetPredictiveScalingForecastHeaders extends SpeakeasyBase {
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
}


export class PostGetPredictiveScalingForecastRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostGetPredictiveScalingForecastQueryParams;

  @Metadata()
  headers: PostGetPredictiveScalingForecastHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostGetPredictiveScalingForecastResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
