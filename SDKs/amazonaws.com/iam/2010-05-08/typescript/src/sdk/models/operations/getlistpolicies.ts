import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetListPoliciesActionEnum {
    ListPolicies = "ListPolicies"
}

export enum GetListPoliciesPolicyUsageFilterEnum {
    PermissionsPolicy = "PermissionsPolicy",
    PermissionsBoundary = "PermissionsBoundary"
}

export enum GetListPoliciesScopeEnum {
    All = "All",
    Aws = "AWS",
    Local = "Local"
}

export enum GetListPoliciesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetListPoliciesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListPoliciesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxItems" })
  maxItems?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OnlyAttached" })
  onlyAttached?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PathPrefix" })
  pathPrefix?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PolicyUsageFilter" })
  policyUsageFilter?: GetListPoliciesPolicyUsageFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Scope" })
  scope?: GetListPoliciesScopeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListPoliciesVersionEnum;
}


export class GetListPoliciesHeaders extends SpeakeasyBase {
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


export class GetListPoliciesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetListPoliciesQueryParams;

  @SpeakeasyMetadata()
  headers: GetListPoliciesHeaders;
}


export class GetListPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
