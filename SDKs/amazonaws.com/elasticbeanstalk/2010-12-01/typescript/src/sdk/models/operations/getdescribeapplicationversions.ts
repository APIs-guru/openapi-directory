import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeApplicationVersionsActionEnum {
    DescribeApplicationVersions = "DescribeApplicationVersions"
}

export enum GetDescribeApplicationVersionsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDescribeApplicationVersionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeApplicationVersionsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ApplicationName" })
  applicationName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeApplicationVersionsVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VersionLabels" })
  versionLabels?: string[];
}


export class GetDescribeApplicationVersionsHeaders extends SpeakeasyBase {
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


export class GetDescribeApplicationVersionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeApplicationVersionsQueryParams;

  @Metadata()
  headers: GetDescribeApplicationVersionsHeaders;
}


export class GetDescribeApplicationVersionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
