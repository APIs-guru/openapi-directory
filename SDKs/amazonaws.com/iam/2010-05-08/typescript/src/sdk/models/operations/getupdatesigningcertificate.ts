import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetUpdateSigningCertificateActionEnum {
    UpdateSigningCertificate = "UpdateSigningCertificate"
}

export enum GetUpdateSigningCertificateStatusEnum {
    Active = "Active"
,    Inactive = "Inactive"
}

export enum GetUpdateSigningCertificateVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetUpdateSigningCertificateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateSigningCertificateActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CertificateId" })
  certificateId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status: GetUpdateSigningCertificateStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=UserName" })
  userName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateSigningCertificateVersionEnum;
}


export class GetUpdateSigningCertificateHeaders extends SpeakeasyBase {
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


export class GetUpdateSigningCertificateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUpdateSigningCertificateQueryParams;

  @Metadata()
  headers: GetUpdateSigningCertificateHeaders;
}


export class GetUpdateSigningCertificateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
