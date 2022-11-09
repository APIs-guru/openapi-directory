import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetListServerCertificateTagsActionEnum {
    ListServerCertificateTags = "ListServerCertificateTags"
}

export enum GetListServerCertificateTagsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetListServerCertificateTagsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListServerCertificateTagsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" })
  maxItems?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ServerCertificateName" })
  serverCertificateName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListServerCertificateTagsVersionEnum;
}


export class GetListServerCertificateTagsHeaders extends SpeakeasyBase {
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


export class GetListServerCertificateTagsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetListServerCertificateTagsQueryParams;

  @Metadata()
  headers: GetListServerCertificateTagsHeaders;
}


export class GetListServerCertificateTagsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
