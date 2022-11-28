import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetUpdateAccountSendingEnabledActionEnum {
    UpdateAccountSendingEnabled = "UpdateAccountSendingEnabled"
}

export enum GetUpdateAccountSendingEnabledVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetUpdateAccountSendingEnabledQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateAccountSendingEnabledActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateAccountSendingEnabledVersionEnum;
}


export class GetUpdateAccountSendingEnabledHeaders extends SpeakeasyBase {
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


export class GetUpdateAccountSendingEnabledRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUpdateAccountSendingEnabledQueryParams;

  @SpeakeasyMetadata()
  headers: GetUpdateAccountSendingEnabledHeaders;
}


export class GetUpdateAccountSendingEnabledResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
