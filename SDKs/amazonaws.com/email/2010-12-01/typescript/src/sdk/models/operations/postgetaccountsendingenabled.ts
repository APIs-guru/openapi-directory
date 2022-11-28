import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostGetAccountSendingEnabledActionEnum {
    GetAccountSendingEnabled = "GetAccountSendingEnabled"
}

export enum PostGetAccountSendingEnabledVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class PostGetAccountSendingEnabledQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostGetAccountSendingEnabledActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostGetAccountSendingEnabledVersionEnum;
}


export class PostGetAccountSendingEnabledHeaders extends SpeakeasyBase {
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


export class PostGetAccountSendingEnabledRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostGetAccountSendingEnabledQueryParams;

  @SpeakeasyMetadata()
  headers: PostGetAccountSendingEnabledHeaders;
}


export class PostGetAccountSendingEnabledResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
