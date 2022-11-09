import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetPredictiveScalingForecastActionEnum {
    GetPredictiveScalingForecast = "GetPredictiveScalingForecast"
}

export enum GetGetPredictiveScalingForecastVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetGetPredictiveScalingForecastQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetPredictiveScalingForecastActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EndTime" })
  endTime: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PolicyName" })
  policyName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StartTime" })
  startTime: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetPredictiveScalingForecastVersionEnum;
}


export class GetGetPredictiveScalingForecastHeaders extends SpeakeasyBase {
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


export class GetGetPredictiveScalingForecastRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetPredictiveScalingForecastQueryParams;

  @Metadata()
  headers: GetGetPredictiveScalingForecastHeaders;
}


export class GetGetPredictiveScalingForecastResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
