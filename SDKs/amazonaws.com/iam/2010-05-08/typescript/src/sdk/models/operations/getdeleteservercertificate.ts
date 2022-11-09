import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteServerCertificateActionEnum {
    DeleteServerCertificate = "DeleteServerCertificate"
}

export enum GetDeleteServerCertificateVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetDeleteServerCertificateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteServerCertificateActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ServerCertificateName" })
  serverCertificateName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteServerCertificateVersionEnum;
}


export class GetDeleteServerCertificateHeaders extends SpeakeasyBase {
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


export class GetDeleteServerCertificateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteServerCertificateQueryParams;

  @Metadata()
  headers: GetDeleteServerCertificateHeaders;
}


export class GetDeleteServerCertificateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
