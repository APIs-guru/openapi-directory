import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostListSigningCertificatesActionEnum {
    ListSigningCertificates = "ListSigningCertificates"
}

export enum PostListSigningCertificatesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class PostListSigningCertificatesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostListSigningCertificatesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" })
  maxItems?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostListSigningCertificatesVersionEnum;
}


export class PostListSigningCertificatesHeaders extends SpeakeasyBase {
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


export class PostListSigningCertificatesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostListSigningCertificatesQueryParams;

  @Metadata()
  headers: PostListSigningCertificatesHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostListSigningCertificatesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
