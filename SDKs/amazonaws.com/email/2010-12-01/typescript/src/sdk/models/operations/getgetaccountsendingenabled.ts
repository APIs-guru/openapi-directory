import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetAccountSendingEnabledActionEnum {
    GetAccountSendingEnabled = "GetAccountSendingEnabled"
}

export enum GetGetAccountSendingEnabledVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetGetAccountSendingEnabledQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetAccountSendingEnabledActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetAccountSendingEnabledVersionEnum;
}


export class GetGetAccountSendingEnabledHeaders extends SpeakeasyBase {
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


export class GetGetAccountSendingEnabledRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetAccountSendingEnabledQueryParams;

  @Metadata()
  headers: GetGetAccountSendingEnabledHeaders;
}


export class GetGetAccountSendingEnabledResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
