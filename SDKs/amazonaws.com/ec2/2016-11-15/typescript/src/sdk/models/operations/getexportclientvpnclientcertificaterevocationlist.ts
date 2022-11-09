import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetExportClientVpnClientCertificateRevocationListActionEnum {
    ExportClientVpnClientCertificateRevocationList = "ExportClientVpnClientCertificateRevocationList"
}

export enum GetExportClientVpnClientCertificateRevocationListVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetExportClientVpnClientCertificateRevocationListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetExportClientVpnClientCertificateRevocationListActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClientVpnEndpointId" })
  clientVpnEndpointId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetExportClientVpnClientCertificateRevocationListVersionEnum;
}


export class GetExportClientVpnClientCertificateRevocationListHeaders extends SpeakeasyBase {
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


export class GetExportClientVpnClientCertificateRevocationListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetExportClientVpnClientCertificateRevocationListQueryParams;

  @Metadata()
  headers: GetExportClientVpnClientCertificateRevocationListHeaders;
}


export class GetExportClientVpnClientCertificateRevocationListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
