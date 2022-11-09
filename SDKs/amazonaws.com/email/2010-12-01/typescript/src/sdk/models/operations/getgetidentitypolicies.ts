import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetIdentityPoliciesActionEnum {
    GetIdentityPolicies = "GetIdentityPolicies"
}

export enum GetGetIdentityPoliciesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetGetIdentityPoliciesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetIdentityPoliciesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Identity" })
  identity: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PolicyNames" })
  policyNames: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetIdentityPoliciesVersionEnum;
}


export class GetGetIdentityPoliciesHeaders extends SpeakeasyBase {
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


export class GetGetIdentityPoliciesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetIdentityPoliciesQueryParams;

  @Metadata()
  headers: GetGetIdentityPoliciesHeaders;
}


export class GetGetIdentityPoliciesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
