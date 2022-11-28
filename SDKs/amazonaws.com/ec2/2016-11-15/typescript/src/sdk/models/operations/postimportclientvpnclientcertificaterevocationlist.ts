import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostImportClientVpnClientCertificateRevocationListActionEnum {
    ImportClientVpnClientCertificateRevocationList = "ImportClientVpnClientCertificateRevocationList"
}

export enum PostImportClientVpnClientCertificateRevocationListVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostImportClientVpnClientCertificateRevocationListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostImportClientVpnClientCertificateRevocationListActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostImportClientVpnClientCertificateRevocationListVersionEnum;
}


export class PostImportClientVpnClientCertificateRevocationListHeaders extends SpeakeasyBase {
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


export class PostImportClientVpnClientCertificateRevocationListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostImportClientVpnClientCertificateRevocationListQueryParams;

  @SpeakeasyMetadata()
  headers: PostImportClientVpnClientCertificateRevocationListHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostImportClientVpnClientCertificateRevocationListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
