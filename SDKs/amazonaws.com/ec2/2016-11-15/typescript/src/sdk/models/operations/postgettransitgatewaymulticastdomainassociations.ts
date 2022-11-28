import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostGetTransitGatewayMulticastDomainAssociationsActionEnum {
    GetTransitGatewayMulticastDomainAssociations = "GetTransitGatewayMulticastDomainAssociations"
}

export enum PostGetTransitGatewayMulticastDomainAssociationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostGetTransitGatewayMulticastDomainAssociationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostGetTransitGatewayMulticastDomainAssociationsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostGetTransitGatewayMulticastDomainAssociationsVersionEnum;
}


export class PostGetTransitGatewayMulticastDomainAssociationsHeaders extends SpeakeasyBase {
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


export class PostGetTransitGatewayMulticastDomainAssociationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostGetTransitGatewayMulticastDomainAssociationsQueryParams;

  @SpeakeasyMetadata()
  headers: PostGetTransitGatewayMulticastDomainAssociationsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostGetTransitGatewayMulticastDomainAssociationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
