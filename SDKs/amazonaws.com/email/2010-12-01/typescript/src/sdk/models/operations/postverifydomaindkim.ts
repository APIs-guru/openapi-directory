import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostVerifyDomainDkimActionEnum {
    VerifyDomainDkim = "VerifyDomainDkim"
}

export enum PostVerifyDomainDkimVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class PostVerifyDomainDkimQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostVerifyDomainDkimActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostVerifyDomainDkimVersionEnum;
}


export class PostVerifyDomainDkimHeaders extends SpeakeasyBase {
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


export class PostVerifyDomainDkimRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostVerifyDomainDkimQueryParams;

  @Metadata()
  headers: PostVerifyDomainDkimHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostVerifyDomainDkimResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
