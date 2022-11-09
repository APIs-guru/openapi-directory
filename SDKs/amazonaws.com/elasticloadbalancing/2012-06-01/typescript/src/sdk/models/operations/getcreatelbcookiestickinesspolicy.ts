import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCreateLbCookieStickinessPolicyActionEnum {
    CreateLbCookieStickinessPolicy = "CreateLBCookieStickinessPolicy"
}

export enum GetCreateLbCookieStickinessPolicyVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}


export class GetCreateLbCookieStickinessPolicyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateLbCookieStickinessPolicyActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CookieExpirationPeriod" })
  cookieExpirationPeriod?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerName" })
  loadBalancerName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PolicyName" })
  policyName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateLbCookieStickinessPolicyVersionEnum;
}


export class GetCreateLbCookieStickinessPolicyHeaders extends SpeakeasyBase {
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


export class GetCreateLbCookieStickinessPolicyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCreateLbCookieStickinessPolicyQueryParams;

  @Metadata()
  headers: GetCreateLbCookieStickinessPolicyHeaders;
}


export class GetCreateLbCookieStickinessPolicyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
