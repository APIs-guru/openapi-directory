import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostSetIdentityNotificationTopicActionEnum {
    SetIdentityNotificationTopic = "SetIdentityNotificationTopic"
}

export enum PostSetIdentityNotificationTopicVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class PostSetIdentityNotificationTopicQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostSetIdentityNotificationTopicActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostSetIdentityNotificationTopicVersionEnum;
}


export class PostSetIdentityNotificationTopicHeaders extends SpeakeasyBase {
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


export class PostSetIdentityNotificationTopicRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostSetIdentityNotificationTopicQueryParams;

  @SpeakeasyMetadata()
  headers: PostSetIdentityNotificationTopicHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostSetIdentityNotificationTopicResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
