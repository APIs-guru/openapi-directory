import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetUpdateSigningCertificateActionEnum {
    UpdateSigningCertificate = "UpdateSigningCertificate"
}

export enum GetUpdateSigningCertificateStatusEnum {
    Active = "Active",
    Inactive = "Inactive"
}

export enum GetUpdateSigningCertificateVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetUpdateSigningCertificateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateSigningCertificateActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CertificateId" })
  certificateId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status: GetUpdateSigningCertificateStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UserName" })
  userName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateSigningCertificateVersionEnum;
}


export class GetUpdateSigningCertificateHeaders extends SpeakeasyBase {
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


export class GetUpdateSigningCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUpdateSigningCertificateQueryParams;

  @SpeakeasyMetadata()
  headers: GetUpdateSigningCertificateHeaders;
}


export class GetUpdateSigningCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
