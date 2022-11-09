import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetSetIdentityHeadersInNotificationsEnabledActionEnum {
    SetIdentityHeadersInNotificationsEnabled = "SetIdentityHeadersInNotificationsEnabled"
}

export enum GetSetIdentityHeadersInNotificationsEnabledNotificationTypeEnum {
    Bounce = "Bounce"
,    Complaint = "Complaint"
,    Delivery = "Delivery"
}

export enum GetSetIdentityHeadersInNotificationsEnabledVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetSetIdentityHeadersInNotificationsEnabledQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSetIdentityHeadersInNotificationsEnabledActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Enabled" })
  enabled: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Identity" })
  identity: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NotificationType" })
  notificationType: GetSetIdentityHeadersInNotificationsEnabledNotificationTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSetIdentityHeadersInNotificationsEnabledVersionEnum;
}


export class GetSetIdentityHeadersInNotificationsEnabledHeaders extends SpeakeasyBase {
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


export class GetSetIdentityHeadersInNotificationsEnabledRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSetIdentityHeadersInNotificationsEnabledQueryParams;

  @Metadata()
  headers: GetSetIdentityHeadersInNotificationsEnabledHeaders;
}


export class GetSetIdentityHeadersInNotificationsEnabledResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
