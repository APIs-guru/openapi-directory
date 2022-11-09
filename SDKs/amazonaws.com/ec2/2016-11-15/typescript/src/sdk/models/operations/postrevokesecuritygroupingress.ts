import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostRevokeSecurityGroupIngressActionEnum {
    RevokeSecurityGroupIngress = "RevokeSecurityGroupIngress"
}

export enum PostRevokeSecurityGroupIngressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostRevokeSecurityGroupIngressQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostRevokeSecurityGroupIngressActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostRevokeSecurityGroupIngressVersionEnum;
}


export class PostRevokeSecurityGroupIngressHeaders extends SpeakeasyBase {
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


export class PostRevokeSecurityGroupIngressRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostRevokeSecurityGroupIngressQueryParams;

  @Metadata()
  headers: PostRevokeSecurityGroupIngressHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostRevokeSecurityGroupIngressResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
