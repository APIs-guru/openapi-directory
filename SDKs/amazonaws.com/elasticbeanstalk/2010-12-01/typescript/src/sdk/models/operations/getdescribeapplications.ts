import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeApplicationsActionEnum {
    DescribeApplications = "DescribeApplications"
}

export enum GetDescribeApplicationsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDescribeApplicationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeApplicationsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ApplicationNames" })
  applicationNames?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeApplicationsVersionEnum;
}


export class GetDescribeApplicationsHeaders extends SpeakeasyBase {
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


export class GetDescribeApplicationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeApplicationsQueryParams;

  @Metadata()
  headers: GetDescribeApplicationsHeaders;
}


export class GetDescribeApplicationsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
