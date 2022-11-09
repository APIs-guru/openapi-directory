import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetSendQuotaActionEnum {
    GetSendQuota = "GetSendQuota"
}

export enum GetGetSendQuotaVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetGetSendQuotaQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetSendQuotaActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetSendQuotaVersionEnum;
}


export class GetGetSendQuotaHeaders extends SpeakeasyBase {
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


export class GetGetSendQuotaRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetSendQuotaQueryParams;

  @Metadata()
  headers: GetGetSendQuotaHeaders;
}


export class GetGetSendQuotaResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
