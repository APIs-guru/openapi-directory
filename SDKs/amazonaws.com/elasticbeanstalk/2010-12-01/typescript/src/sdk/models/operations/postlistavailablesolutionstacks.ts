import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostListAvailableSolutionStacksActionEnum {
    ListAvailableSolutionStacks = "ListAvailableSolutionStacks"
}

export enum PostListAvailableSolutionStacksVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class PostListAvailableSolutionStacksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostListAvailableSolutionStacksActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostListAvailableSolutionStacksVersionEnum;
}


export class PostListAvailableSolutionStacksHeaders extends SpeakeasyBase {
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


export class PostListAvailableSolutionStacksRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostListAvailableSolutionStacksQueryParams;

  @Metadata()
  headers: PostListAvailableSolutionStacksHeaders;
}


export class PostListAvailableSolutionStacksResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
