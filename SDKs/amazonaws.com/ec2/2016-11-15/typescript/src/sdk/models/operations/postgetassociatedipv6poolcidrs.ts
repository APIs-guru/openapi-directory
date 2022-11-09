import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostGetAssociatedIpv6PoolCidrsActionEnum {
    GetAssociatedIpv6PoolCidrs = "GetAssociatedIpv6PoolCidrs"
}

export enum PostGetAssociatedIpv6PoolCidrsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostGetAssociatedIpv6PoolCidrsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostGetAssociatedIpv6PoolCidrsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostGetAssociatedIpv6PoolCidrsVersionEnum;
}


export class PostGetAssociatedIpv6PoolCidrsHeaders extends SpeakeasyBase {
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


export class PostGetAssociatedIpv6PoolCidrsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostGetAssociatedIpv6PoolCidrsQueryParams;

  @Metadata()
  headers: PostGetAssociatedIpv6PoolCidrsHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostGetAssociatedIpv6PoolCidrsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
