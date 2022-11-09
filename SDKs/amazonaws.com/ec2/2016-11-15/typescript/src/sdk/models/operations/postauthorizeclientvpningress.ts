import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostAuthorizeClientVpnIngressActionEnum {
    AuthorizeClientVpnIngress = "AuthorizeClientVpnIngress"
}

export enum PostAuthorizeClientVpnIngressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostAuthorizeClientVpnIngressQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostAuthorizeClientVpnIngressActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostAuthorizeClientVpnIngressVersionEnum;
}


export class PostAuthorizeClientVpnIngressHeaders extends SpeakeasyBase {
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


export class PostAuthorizeClientVpnIngressRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostAuthorizeClientVpnIngressQueryParams;

  @Metadata()
  headers: PostAuthorizeClientVpnIngressHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostAuthorizeClientVpnIngressResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
