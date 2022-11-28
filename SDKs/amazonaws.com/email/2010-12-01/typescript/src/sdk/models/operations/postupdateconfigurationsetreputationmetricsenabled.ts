import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostUpdateConfigurationSetReputationMetricsEnabledActionEnum {
    UpdateConfigurationSetReputationMetricsEnabled = "UpdateConfigurationSetReputationMetricsEnabled"
}

export enum PostUpdateConfigurationSetReputationMetricsEnabledVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class PostUpdateConfigurationSetReputationMetricsEnabledQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostUpdateConfigurationSetReputationMetricsEnabledActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostUpdateConfigurationSetReputationMetricsEnabledVersionEnum;
}


export class PostUpdateConfigurationSetReputationMetricsEnabledHeaders extends SpeakeasyBase {
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


export class PostUpdateConfigurationSetReputationMetricsEnabledRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostUpdateConfigurationSetReputationMetricsEnabledQueryParams;

  @SpeakeasyMetadata()
  headers: PostUpdateConfigurationSetReputationMetricsEnabledHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostUpdateConfigurationSetReputationMetricsEnabledResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
