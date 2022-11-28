import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostDeregisterInstanceEventNotificationAttributesActionEnum {
    DeregisterInstanceEventNotificationAttributes = "DeregisterInstanceEventNotificationAttributes"
}

export enum PostDeregisterInstanceEventNotificationAttributesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostDeregisterInstanceEventNotificationAttributesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDeregisterInstanceEventNotificationAttributesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDeregisterInstanceEventNotificationAttributesVersionEnum;
}


export class PostDeregisterInstanceEventNotificationAttributesHeaders extends SpeakeasyBase {
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


export class PostDeregisterInstanceEventNotificationAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostDeregisterInstanceEventNotificationAttributesQueryParams;

  @SpeakeasyMetadata()
  headers: PostDeregisterInstanceEventNotificationAttributesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDeregisterInstanceEventNotificationAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
