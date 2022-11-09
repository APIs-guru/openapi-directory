import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostAuthorizeSecurityGroupIngressActionEnum {
    AuthorizeSecurityGroupIngress = "AuthorizeSecurityGroupIngress"
}

export enum PostAuthorizeSecurityGroupIngressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostAuthorizeSecurityGroupIngressQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostAuthorizeSecurityGroupIngressActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostAuthorizeSecurityGroupIngressVersionEnum;
}


export class PostAuthorizeSecurityGroupIngressHeaders extends SpeakeasyBase {
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


export class PostAuthorizeSecurityGroupIngressRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostAuthorizeSecurityGroupIngressQueryParams;

  @Metadata()
  headers: PostAuthorizeSecurityGroupIngressHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostAuthorizeSecurityGroupIngressResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
