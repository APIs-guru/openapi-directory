import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeDomainsActionEnum {
    DescribeDomains = "DescribeDomains"
}

export enum GetDescribeDomainsVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}


export class GetDescribeDomainsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeDomainsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DomainNames" })
  domainNames?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeDomainsVersionEnum;
}


export class GetDescribeDomainsHeaders extends SpeakeasyBase {
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


export class GetDescribeDomainsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeDomainsQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeDomainsHeaders;
}


export class GetDescribeDomainsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
