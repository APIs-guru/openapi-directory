import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeDefaultSearchFieldActionEnum {
    DescribeDefaultSearchField = "DescribeDefaultSearchField"
}

export enum GetDescribeDefaultSearchFieldVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}


export class GetDescribeDefaultSearchFieldQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeDefaultSearchFieldActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DomainName" })
  domainName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeDefaultSearchFieldVersionEnum;
}


export class GetDescribeDefaultSearchFieldHeaders extends SpeakeasyBase {
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


export class GetDescribeDefaultSearchFieldRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeDefaultSearchFieldQueryParams;

  @Metadata()
  headers: GetDescribeDefaultSearchFieldHeaders;
}


export class GetDescribeDefaultSearchFieldResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
