import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostDeregisterTransitGatewayMulticastGroupMembersActionEnum {
    DeregisterTransitGatewayMulticastGroupMembers = "DeregisterTransitGatewayMulticastGroupMembers"
}

export enum PostDeregisterTransitGatewayMulticastGroupMembersVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostDeregisterTransitGatewayMulticastGroupMembersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDeregisterTransitGatewayMulticastGroupMembersActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDeregisterTransitGatewayMulticastGroupMembersVersionEnum;
}


export class PostDeregisterTransitGatewayMulticastGroupMembersHeaders extends SpeakeasyBase {
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


export class PostDeregisterTransitGatewayMulticastGroupMembersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostDeregisterTransitGatewayMulticastGroupMembersQueryParams;

  @SpeakeasyMetadata()
  headers: PostDeregisterTransitGatewayMulticastGroupMembersHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDeregisterTransitGatewayMulticastGroupMembersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
