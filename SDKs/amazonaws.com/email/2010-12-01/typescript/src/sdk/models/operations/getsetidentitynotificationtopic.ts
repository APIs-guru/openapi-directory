import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetSetIdentityNotificationTopicActionEnum {
    SetIdentityNotificationTopic = "SetIdentityNotificationTopic"
}

export enum GetSetIdentityNotificationTopicNotificationTypeEnum {
    Bounce = "Bounce",
    Complaint = "Complaint",
    Delivery = "Delivery"
}

export enum GetSetIdentityNotificationTopicVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetSetIdentityNotificationTopicQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSetIdentityNotificationTopicActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Identity" })
  identity: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NotificationType" })
  notificationType: GetSetIdentityNotificationTopicNotificationTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SnsTopic" })
  snsTopic?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSetIdentityNotificationTopicVersionEnum;
}


export class GetSetIdentityNotificationTopicHeaders extends SpeakeasyBase {
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


export class GetSetIdentityNotificationTopicRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSetIdentityNotificationTopicQueryParams;

  @SpeakeasyMetadata()
  headers: GetSetIdentityNotificationTopicHeaders;
}


export class GetSetIdentityNotificationTopicResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
