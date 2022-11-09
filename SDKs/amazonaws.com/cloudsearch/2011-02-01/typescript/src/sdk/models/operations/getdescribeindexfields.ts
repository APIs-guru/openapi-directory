import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeIndexFieldsActionEnum {
    DescribeIndexFields = "DescribeIndexFields"
}

export enum GetDescribeIndexFieldsVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}


export class GetDescribeIndexFieldsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeIndexFieldsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DomainName" })
  domainName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=FieldNames" })
  fieldNames?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeIndexFieldsVersionEnum;
}


export class GetDescribeIndexFieldsHeaders extends SpeakeasyBase {
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


export class GetDescribeIndexFieldsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeIndexFieldsQueryParams;

  @Metadata()
  headers: GetDescribeIndexFieldsHeaders;
}


export class GetDescribeIndexFieldsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
