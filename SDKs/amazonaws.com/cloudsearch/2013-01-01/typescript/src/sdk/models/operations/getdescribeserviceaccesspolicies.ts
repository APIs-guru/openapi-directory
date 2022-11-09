import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeServiceAccessPoliciesActionEnum {
    DescribeServiceAccessPolicies = "DescribeServiceAccessPolicies"
}

export enum GetDescribeServiceAccessPoliciesVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}


export class GetDescribeServiceAccessPoliciesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeServiceAccessPoliciesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Deployed" })
  deployed?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DomainName" })
  domainName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeServiceAccessPoliciesVersionEnum;
}


export class GetDescribeServiceAccessPoliciesHeaders extends SpeakeasyBase {
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


export class GetDescribeServiceAccessPoliciesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeServiceAccessPoliciesQueryParams;

  @Metadata()
  headers: GetDescribeServiceAccessPoliciesHeaders;
}


export class GetDescribeServiceAccessPoliciesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
