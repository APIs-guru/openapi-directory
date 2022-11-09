import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetListPoliciesActionEnum {
    ListPolicies = "ListPolicies"
}

export enum GetListPoliciesPolicyUsageFilterEnum {
    PermissionsPolicy = "PermissionsPolicy"
,    PermissionsBoundary = "PermissionsBoundary"
}

export enum GetListPoliciesScopeEnum {
    All = "All"
,    Aws = "AWS"
,    Local = "Local"
}

export enum GetListPoliciesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetListPoliciesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListPoliciesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" })
  maxItems?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=OnlyAttached" })
  onlyAttached?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PathPrefix" })
  pathPrefix?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PolicyUsageFilter" })
  policyUsageFilter?: GetListPoliciesPolicyUsageFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Scope" })
  scope?: GetListPoliciesScopeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListPoliciesVersionEnum;
}


export class GetListPoliciesHeaders extends SpeakeasyBase {
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


export class GetListPoliciesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetListPoliciesQueryParams;

  @Metadata()
  headers: GetListPoliciesHeaders;
}


export class GetListPoliciesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
