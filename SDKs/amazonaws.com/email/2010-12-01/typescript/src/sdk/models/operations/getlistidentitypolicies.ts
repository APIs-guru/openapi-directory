import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetListIdentityPoliciesActionEnum {
    ListIdentityPolicies = "ListIdentityPolicies"
}

export enum GetListIdentityPoliciesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetListIdentityPoliciesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListIdentityPoliciesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Identity" })
  identity: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListIdentityPoliciesVersionEnum;
}


export class GetListIdentityPoliciesHeaders extends SpeakeasyBase {
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


export class GetListIdentityPoliciesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetListIdentityPoliciesQueryParams;

  @Metadata()
  headers: GetListIdentityPoliciesHeaders;
}


export class GetListIdentityPoliciesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
