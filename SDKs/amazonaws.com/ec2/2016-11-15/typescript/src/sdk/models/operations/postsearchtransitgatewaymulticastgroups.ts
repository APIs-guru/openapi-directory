import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostSearchTransitGatewayMulticastGroupsActionEnum {
    SearchTransitGatewayMulticastGroups = "SearchTransitGatewayMulticastGroups"
}

export enum PostSearchTransitGatewayMulticastGroupsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostSearchTransitGatewayMulticastGroupsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostSearchTransitGatewayMulticastGroupsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostSearchTransitGatewayMulticastGroupsVersionEnum;
}


export class PostSearchTransitGatewayMulticastGroupsHeaders extends SpeakeasyBase {
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


export class PostSearchTransitGatewayMulticastGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostSearchTransitGatewayMulticastGroupsQueryParams;

  @SpeakeasyMetadata()
  headers: PostSearchTransitGatewayMulticastGroupsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostSearchTransitGatewayMulticastGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
