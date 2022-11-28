import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostSetIdentityMailFromDomainActionEnum {
    SetIdentityMailFromDomain = "SetIdentityMailFromDomain"
}

export enum PostSetIdentityMailFromDomainVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class PostSetIdentityMailFromDomainQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostSetIdentityMailFromDomainActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostSetIdentityMailFromDomainVersionEnum;
}


export class PostSetIdentityMailFromDomainHeaders extends SpeakeasyBase {
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


export class PostSetIdentityMailFromDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostSetIdentityMailFromDomainQueryParams;

  @SpeakeasyMetadata()
  headers: PostSetIdentityMailFromDomainHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostSetIdentityMailFromDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
