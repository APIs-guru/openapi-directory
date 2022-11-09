import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetUpdateAccountSendingEnabledActionEnum {
    UpdateAccountSendingEnabled = "UpdateAccountSendingEnabled"
}

export enum GetUpdateAccountSendingEnabledVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetUpdateAccountSendingEnabledQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateAccountSendingEnabledActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateAccountSendingEnabledVersionEnum;
}


export class GetUpdateAccountSendingEnabledHeaders extends SpeakeasyBase {
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


export class GetUpdateAccountSendingEnabledRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUpdateAccountSendingEnabledQueryParams;

  @Metadata()
  headers: GetUpdateAccountSendingEnabledHeaders;
}


export class GetUpdateAccountSendingEnabledResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
