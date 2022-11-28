import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeEnvironmentsActionEnum {
    DescribeEnvironments = "DescribeEnvironments"
}

export enum GetDescribeEnvironmentsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDescribeEnvironmentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeEnvironmentsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ApplicationName" })
  applicationName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnvironmentIds" })
  environmentIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnvironmentNames" })
  environmentNames?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IncludeDeleted" })
  includeDeleted?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IncludedDeletedBackTo" })
  includedDeletedBackTo?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeEnvironmentsVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VersionLabel" })
  versionLabel?: string;
}


export class GetDescribeEnvironmentsHeaders extends SpeakeasyBase {
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


export class GetDescribeEnvironmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeEnvironmentsQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeEnvironmentsHeaders;
}


export class GetDescribeEnvironmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
