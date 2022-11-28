import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetSetIdentityHeadersInNotificationsEnabledActionEnum {
    SetIdentityHeadersInNotificationsEnabled = "SetIdentityHeadersInNotificationsEnabled"
}

export enum GetSetIdentityHeadersInNotificationsEnabledNotificationTypeEnum {
    Bounce = "Bounce",
    Complaint = "Complaint",
    Delivery = "Delivery"
}

export enum GetSetIdentityHeadersInNotificationsEnabledVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetSetIdentityHeadersInNotificationsEnabledQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSetIdentityHeadersInNotificationsEnabledActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Identity" })
  identity: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NotificationType" })
  notificationType: GetSetIdentityHeadersInNotificationsEnabledNotificationTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSetIdentityHeadersInNotificationsEnabledVersionEnum;
}


export class GetSetIdentityHeadersInNotificationsEnabledHeaders extends SpeakeasyBase {
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


export class GetSetIdentityHeadersInNotificationsEnabledRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSetIdentityHeadersInNotificationsEnabledQueryParams;

  @SpeakeasyMetadata()
  headers: GetSetIdentityHeadersInNotificationsEnabledHeaders;
}


export class GetSetIdentityHeadersInNotificationsEnabledResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
