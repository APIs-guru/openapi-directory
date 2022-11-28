import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetIdentityPoliciesActionEnum {
    GetIdentityPolicies = "GetIdentityPolicies"
}

export enum GetGetIdentityPoliciesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetGetIdentityPoliciesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetIdentityPoliciesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Identity" })
  identity: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PolicyNames" })
  policyNames: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetIdentityPoliciesVersionEnum;
}


export class GetGetIdentityPoliciesHeaders extends SpeakeasyBase {
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


export class GetGetIdentityPoliciesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetIdentityPoliciesQueryParams;

  @SpeakeasyMetadata()
  headers: GetGetIdentityPoliciesHeaders;
}


export class GetGetIdentityPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
