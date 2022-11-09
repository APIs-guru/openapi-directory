import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDeregisterInstanceEventNotificationAttributesActionEnum {
    DeregisterInstanceEventNotificationAttributes = "DeregisterInstanceEventNotificationAttributes"
}

export enum PostDeregisterInstanceEventNotificationAttributesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostDeregisterInstanceEventNotificationAttributesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDeregisterInstanceEventNotificationAttributesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDeregisterInstanceEventNotificationAttributesVersionEnum;
}


export class PostDeregisterInstanceEventNotificationAttributesHeaders extends SpeakeasyBase {
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


export class PostDeregisterInstanceEventNotificationAttributesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDeregisterInstanceEventNotificationAttributesQueryParams;

  @Metadata()
  headers: PostDeregisterInstanceEventNotificationAttributesHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDeregisterInstanceEventNotificationAttributesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
