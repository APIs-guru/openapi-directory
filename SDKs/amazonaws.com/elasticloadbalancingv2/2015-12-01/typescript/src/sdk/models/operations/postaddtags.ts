import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostAddTagsActionEnum {
    AddTags = "AddTags"
}

export enum PostAddTagsVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}


export class PostAddTagsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostAddTagsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostAddTagsVersionEnum;
}


export class PostAddTagsHeaders extends SpeakeasyBase {
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


export class PostAddTagsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostAddTagsQueryParams;

  @Metadata()
  headers: PostAddTagsHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostAddTagsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
