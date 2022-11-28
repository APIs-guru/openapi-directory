import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostListAccountAliasesActionEnum {
    ListAccountAliases = "ListAccountAliases"
}

export enum PostListAccountAliasesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class PostListAccountAliasesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostListAccountAliasesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxItems" })
  maxItems?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostListAccountAliasesVersionEnum;
}


export class PostListAccountAliasesHeaders extends SpeakeasyBase {
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


export class PostListAccountAliasesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostListAccountAliasesQueryParams;

  @SpeakeasyMetadata()
  headers: PostListAccountAliasesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostListAccountAliasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
