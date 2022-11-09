import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetImportClientVpnClientCertificateRevocationListActionEnum {
    ImportClientVpnClientCertificateRevocationList = "ImportClientVpnClientCertificateRevocationList"
}

export enum GetImportClientVpnClientCertificateRevocationListVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetImportClientVpnClientCertificateRevocationListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetImportClientVpnClientCertificateRevocationListActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CertificateRevocationList" })
  certificateRevocationList: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClientVpnEndpointId" })
  clientVpnEndpointId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetImportClientVpnClientCertificateRevocationListVersionEnum;
}


export class GetImportClientVpnClientCertificateRevocationListHeaders extends SpeakeasyBase {
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


export class GetImportClientVpnClientCertificateRevocationListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetImportClientVpnClientCertificateRevocationListQueryParams;

  @Metadata()
  headers: GetImportClientVpnClientCertificateRevocationListHeaders;
}


export class GetImportClientVpnClientCertificateRevocationListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
