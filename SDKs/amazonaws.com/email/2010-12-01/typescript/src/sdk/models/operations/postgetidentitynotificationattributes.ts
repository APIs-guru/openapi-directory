import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostGetIdentityNotificationAttributesActionEnum {
    GetIdentityNotificationAttributes = "GetIdentityNotificationAttributes"
}

export enum PostGetIdentityNotificationAttributesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class PostGetIdentityNotificationAttributesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostGetIdentityNotificationAttributesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostGetIdentityNotificationAttributesVersionEnum;
}


export class PostGetIdentityNotificationAttributesHeaders extends SpeakeasyBase {
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


export class PostGetIdentityNotificationAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostGetIdentityNotificationAttributesQueryParams;

  @SpeakeasyMetadata()
  headers: PostGetIdentityNotificationAttributesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostGetIdentityNotificationAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
