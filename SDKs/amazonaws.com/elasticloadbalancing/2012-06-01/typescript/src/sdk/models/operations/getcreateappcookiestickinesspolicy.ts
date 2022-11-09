import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCreateAppCookieStickinessPolicyActionEnum {
    CreateAppCookieStickinessPolicy = "CreateAppCookieStickinessPolicy"
}

export enum GetCreateAppCookieStickinessPolicyVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}


export class GetCreateAppCookieStickinessPolicyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateAppCookieStickinessPolicyActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CookieName" })
  cookieName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerName" })
  loadBalancerName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PolicyName" })
  policyName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateAppCookieStickinessPolicyVersionEnum;
}


export class GetCreateAppCookieStickinessPolicyHeaders extends SpeakeasyBase {
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


export class GetCreateAppCookieStickinessPolicyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCreateAppCookieStickinessPolicyQueryParams;

  @Metadata()
  headers: GetCreateAppCookieStickinessPolicyHeaders;
}


export class GetCreateAppCookieStickinessPolicyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
