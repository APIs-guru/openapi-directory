import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetUpdateServerCertificateActionEnum {
    UpdateServerCertificate = "UpdateServerCertificate"
}

export enum GetUpdateServerCertificateVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetUpdateServerCertificateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateServerCertificateActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NewPath" })
  newPath?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NewServerCertificateName" })
  newServerCertificateName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ServerCertificateName" })
  serverCertificateName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateServerCertificateVersionEnum;
}


export class GetUpdateServerCertificateHeaders extends SpeakeasyBase {
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


export class GetUpdateServerCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUpdateServerCertificateQueryParams;

  @SpeakeasyMetadata()
  headers: GetUpdateServerCertificateHeaders;
}


export class GetUpdateServerCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
