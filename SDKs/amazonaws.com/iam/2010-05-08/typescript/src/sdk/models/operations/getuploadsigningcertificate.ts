import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetUploadSigningCertificateActionEnum {
    UploadSigningCertificate = "UploadSigningCertificate"
}

export enum GetUploadSigningCertificateVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetUploadSigningCertificateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUploadSigningCertificateActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CertificateBody" })
  certificateBody: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=UserName" })
  userName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUploadSigningCertificateVersionEnum;
}


export class GetUploadSigningCertificateHeaders extends SpeakeasyBase {
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


export class GetUploadSigningCertificateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUploadSigningCertificateQueryParams;

  @Metadata()
  headers: GetUploadSigningCertificateHeaders;
}


export class GetUploadSigningCertificateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
