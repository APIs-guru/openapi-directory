import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostExportClientVpnClientCertificateRevocationListActionEnum {
    ExportClientVpnClientCertificateRevocationList = "ExportClientVpnClientCertificateRevocationList"
}

export enum PostExportClientVpnClientCertificateRevocationListVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostExportClientVpnClientCertificateRevocationListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostExportClientVpnClientCertificateRevocationListActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostExportClientVpnClientCertificateRevocationListVersionEnum;
}


export class PostExportClientVpnClientCertificateRevocationListHeaders extends SpeakeasyBase {
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


export class PostExportClientVpnClientCertificateRevocationListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostExportClientVpnClientCertificateRevocationListQueryParams;

  @Metadata()
  headers: PostExportClientVpnClientCertificateRevocationListHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostExportClientVpnClientCertificateRevocationListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
