import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetUpdateServerCertificateActionEnum {
    UpdateServerCertificate = "UpdateServerCertificate"
}

export enum GetUpdateServerCertificateVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetUpdateServerCertificateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateServerCertificateActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NewPath" })
  newPath?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NewServerCertificateName" })
  newServerCertificateName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ServerCertificateName" })
  serverCertificateName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateServerCertificateVersionEnum;
}


export class GetUpdateServerCertificateHeaders extends SpeakeasyBase {
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


export class GetUpdateServerCertificateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUpdateServerCertificateQueryParams;

  @Metadata()
  headers: GetUpdateServerCertificateHeaders;
}


export class GetUpdateServerCertificateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
