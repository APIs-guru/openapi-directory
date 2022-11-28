import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostCancelInstanceRefreshActionEnum {
    CancelInstanceRefresh = "CancelInstanceRefresh"
}

export enum PostCancelInstanceRefreshVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class PostCancelInstanceRefreshQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostCancelInstanceRefreshActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostCancelInstanceRefreshVersionEnum;
}


export class PostCancelInstanceRefreshHeaders extends SpeakeasyBase {
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


export class PostCancelInstanceRefreshRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostCancelInstanceRefreshQueryParams;

  @SpeakeasyMetadata()
  headers: PostCancelInstanceRefreshHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostCancelInstanceRefreshResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
