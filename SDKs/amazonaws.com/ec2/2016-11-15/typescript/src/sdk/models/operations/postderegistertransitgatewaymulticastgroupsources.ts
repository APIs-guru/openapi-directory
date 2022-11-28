import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostDeregisterTransitGatewayMulticastGroupSourcesActionEnum {
    DeregisterTransitGatewayMulticastGroupSources = "DeregisterTransitGatewayMulticastGroupSources"
}

export enum PostDeregisterTransitGatewayMulticastGroupSourcesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostDeregisterTransitGatewayMulticastGroupSourcesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDeregisterTransitGatewayMulticastGroupSourcesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDeregisterTransitGatewayMulticastGroupSourcesVersionEnum;
}


export class PostDeregisterTransitGatewayMulticastGroupSourcesHeaders extends SpeakeasyBase {
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


export class PostDeregisterTransitGatewayMulticastGroupSourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostDeregisterTransitGatewayMulticastGroupSourcesQueryParams;

  @SpeakeasyMetadata()
  headers: PostDeregisterTransitGatewayMulticastGroupSourcesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDeregisterTransitGatewayMulticastGroupSourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
