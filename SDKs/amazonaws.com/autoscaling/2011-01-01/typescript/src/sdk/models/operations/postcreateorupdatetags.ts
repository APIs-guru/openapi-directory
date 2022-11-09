import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostCreateOrUpdateTagsActionEnum {
    CreateOrUpdateTags = "CreateOrUpdateTags"
}

export enum PostCreateOrUpdateTagsVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class PostCreateOrUpdateTagsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostCreateOrUpdateTagsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostCreateOrUpdateTagsVersionEnum;
}


export class PostCreateOrUpdateTagsHeaders extends SpeakeasyBase {
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


export class PostCreateOrUpdateTagsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostCreateOrUpdateTagsQueryParams;

  @Metadata()
  headers: PostCreateOrUpdateTagsHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostCreateOrUpdateTagsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
