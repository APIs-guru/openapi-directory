import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostModifyLoadBalancerAttributesActionEnum {
    ModifyLoadBalancerAttributes = "ModifyLoadBalancerAttributes"
}

export enum PostModifyLoadBalancerAttributesVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}


export class PostModifyLoadBalancerAttributesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostModifyLoadBalancerAttributesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostModifyLoadBalancerAttributesVersionEnum;
}


export class PostModifyLoadBalancerAttributesHeaders extends SpeakeasyBase {
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


export class PostModifyLoadBalancerAttributesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostModifyLoadBalancerAttributesQueryParams;

  @Metadata()
  headers: PostModifyLoadBalancerAttributesHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostModifyLoadBalancerAttributesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
