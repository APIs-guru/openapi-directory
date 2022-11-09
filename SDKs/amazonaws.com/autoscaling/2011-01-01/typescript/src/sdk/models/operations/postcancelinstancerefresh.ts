import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostCancelInstanceRefreshActionEnum {
    CancelInstanceRefresh = "CancelInstanceRefresh"
}

export enum PostCancelInstanceRefreshVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class PostCancelInstanceRefreshQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostCancelInstanceRefreshActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostCancelInstanceRefreshVersionEnum;
}


export class PostCancelInstanceRefreshHeaders extends SpeakeasyBase {
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


export class PostCancelInstanceRefreshRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostCancelInstanceRefreshQueryParams;

  @Metadata()
  headers: PostCancelInstanceRefreshHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostCancelInstanceRefreshResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
