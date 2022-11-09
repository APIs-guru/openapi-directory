import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteSigningCertificateActionEnum {
    DeleteSigningCertificate = "DeleteSigningCertificate"
}

export enum GetDeleteSigningCertificateVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetDeleteSigningCertificateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteSigningCertificateActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CertificateId" })
  certificateId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=UserName" })
  userName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteSigningCertificateVersionEnum;
}


export class GetDeleteSigningCertificateHeaders extends SpeakeasyBase {
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


export class GetDeleteSigningCertificateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteSigningCertificateQueryParams;

  @Metadata()
  headers: GetDeleteSigningCertificateHeaders;
}


export class GetDeleteSigningCertificateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
