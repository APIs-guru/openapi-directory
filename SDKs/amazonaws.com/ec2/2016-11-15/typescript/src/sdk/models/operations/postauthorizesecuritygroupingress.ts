import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostAuthorizeSecurityGroupIngressActionEnum {
    AuthorizeSecurityGroupIngress = "AuthorizeSecurityGroupIngress"
}

export enum PostAuthorizeSecurityGroupIngressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostAuthorizeSecurityGroupIngressQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostAuthorizeSecurityGroupIngressActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostAuthorizeSecurityGroupIngressVersionEnum;
}


export class PostAuthorizeSecurityGroupIngressHeaders extends SpeakeasyBase {
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


export class PostAuthorizeSecurityGroupIngressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostAuthorizeSecurityGroupIngressQueryParams;

  @SpeakeasyMetadata()
  headers: PostAuthorizeSecurityGroupIngressHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostAuthorizeSecurityGroupIngressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
