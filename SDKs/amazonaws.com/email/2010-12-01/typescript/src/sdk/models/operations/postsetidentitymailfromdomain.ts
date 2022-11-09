import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostSetIdentityMailFromDomainActionEnum {
    SetIdentityMailFromDomain = "SetIdentityMailFromDomain"
}

export enum PostSetIdentityMailFromDomainVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class PostSetIdentityMailFromDomainQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostSetIdentityMailFromDomainActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostSetIdentityMailFromDomainVersionEnum;
}


export class PostSetIdentityMailFromDomainHeaders extends SpeakeasyBase {
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


export class PostSetIdentityMailFromDomainRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostSetIdentityMailFromDomainQueryParams;

  @Metadata()
  headers: PostSetIdentityMailFromDomainHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostSetIdentityMailFromDomainResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
