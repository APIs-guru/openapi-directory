import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostVerifyEmailIdentityActionEnum {
    VerifyEmailIdentity = "VerifyEmailIdentity"
}

export enum PostVerifyEmailIdentityVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class PostVerifyEmailIdentityQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostVerifyEmailIdentityActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostVerifyEmailIdentityVersionEnum;
}


export class PostVerifyEmailIdentityHeaders extends SpeakeasyBase {
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


export class PostVerifyEmailIdentityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostVerifyEmailIdentityQueryParams;

  @SpeakeasyMetadata()
  headers: PostVerifyEmailIdentityHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostVerifyEmailIdentityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
