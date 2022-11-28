import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeApplicationVersionsActionEnum {
    DescribeApplicationVersions = "DescribeApplicationVersions"
}

export enum GetDescribeApplicationVersionsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDescribeApplicationVersionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeApplicationVersionsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ApplicationName" })
  applicationName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeApplicationVersionsVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VersionLabels" })
  versionLabels?: string[];
}


export class GetDescribeApplicationVersionsHeaders extends SpeakeasyBase {
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


export class GetDescribeApplicationVersionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeApplicationVersionsQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeApplicationVersionsHeaders;
}


export class GetDescribeApplicationVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
