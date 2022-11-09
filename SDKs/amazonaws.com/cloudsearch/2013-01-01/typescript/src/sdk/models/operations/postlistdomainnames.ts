import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostListDomainNamesActionEnum {
    ListDomainNames = "ListDomainNames"
}

export enum PostListDomainNamesVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}


export class PostListDomainNamesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostListDomainNamesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostListDomainNamesVersionEnum;
}


export class PostListDomainNamesHeaders extends SpeakeasyBase {
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


export class PostListDomainNamesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostListDomainNamesQueryParams;

  @Metadata()
  headers: PostListDomainNamesHeaders;
}


export class PostListDomainNamesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
