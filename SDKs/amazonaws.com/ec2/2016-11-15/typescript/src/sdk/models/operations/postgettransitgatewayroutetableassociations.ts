import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostGetTransitGatewayRouteTableAssociationsActionEnum {
    GetTransitGatewayRouteTableAssociations = "GetTransitGatewayRouteTableAssociations"
}

export enum PostGetTransitGatewayRouteTableAssociationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostGetTransitGatewayRouteTableAssociationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostGetTransitGatewayRouteTableAssociationsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostGetTransitGatewayRouteTableAssociationsVersionEnum;
}


export class PostGetTransitGatewayRouteTableAssociationsHeaders extends SpeakeasyBase {
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


export class PostGetTransitGatewayRouteTableAssociationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostGetTransitGatewayRouteTableAssociationsQueryParams;

  @SpeakeasyMetadata()
  headers: PostGetTransitGatewayRouteTableAssociationsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostGetTransitGatewayRouteTableAssociationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
