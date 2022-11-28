import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostGetAssociatedIpv6PoolCidrsActionEnum {
    GetAssociatedIpv6PoolCidrs = "GetAssociatedIpv6PoolCidrs"
}

export enum PostGetAssociatedIpv6PoolCidrsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostGetAssociatedIpv6PoolCidrsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostGetAssociatedIpv6PoolCidrsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostGetAssociatedIpv6PoolCidrsVersionEnum;
}


export class PostGetAssociatedIpv6PoolCidrsHeaders extends SpeakeasyBase {
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


export class PostGetAssociatedIpv6PoolCidrsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostGetAssociatedIpv6PoolCidrsQueryParams;

  @SpeakeasyMetadata()
  headers: PostGetAssociatedIpv6PoolCidrsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostGetAssociatedIpv6PoolCidrsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
