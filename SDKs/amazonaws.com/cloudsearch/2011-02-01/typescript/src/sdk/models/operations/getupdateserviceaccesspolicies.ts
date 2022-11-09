import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetUpdateServiceAccessPoliciesActionEnum {
    UpdateServiceAccessPolicies = "UpdateServiceAccessPolicies"
}

export enum GetUpdateServiceAccessPoliciesVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}


export class GetUpdateServiceAccessPoliciesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AccessPolicies" })
  accessPolicies: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateServiceAccessPoliciesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DomainName" })
  domainName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateServiceAccessPoliciesVersionEnum;
}


export class GetUpdateServiceAccessPoliciesHeaders extends SpeakeasyBase {
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


export class GetUpdateServiceAccessPoliciesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUpdateServiceAccessPoliciesQueryParams;

  @Metadata()
  headers: GetUpdateServiceAccessPoliciesHeaders;
}


export class GetUpdateServiceAccessPoliciesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
