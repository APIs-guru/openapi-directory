import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeDomainsActionEnum {
    DescribeDomains = "DescribeDomains"
}

export enum GetDescribeDomainsVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}


export class GetDescribeDomainsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeDomainsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DomainNames" })
  domainNames?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeDomainsVersionEnum;
}


export class GetDescribeDomainsHeaders extends SpeakeasyBase {
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


export class GetDescribeDomainsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeDomainsQueryParams;

  @Metadata()
  headers: GetDescribeDomainsHeaders;
}


export class GetDescribeDomainsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
