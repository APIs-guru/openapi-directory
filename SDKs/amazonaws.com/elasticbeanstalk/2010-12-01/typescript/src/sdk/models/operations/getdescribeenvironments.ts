import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeEnvironmentsActionEnum {
    DescribeEnvironments = "DescribeEnvironments"
}

export enum GetDescribeEnvironmentsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDescribeEnvironmentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeEnvironmentsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ApplicationName" })
  applicationName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EnvironmentIds" })
  environmentIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=EnvironmentNames" })
  environmentNames?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=IncludeDeleted" })
  includeDeleted?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=IncludedDeletedBackTo" })
  includedDeletedBackTo?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeEnvironmentsVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VersionLabel" })
  versionLabel?: string;
}


export class GetDescribeEnvironmentsHeaders extends SpeakeasyBase {
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


export class GetDescribeEnvironmentsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeEnvironmentsQueryParams;

  @Metadata()
  headers: GetDescribeEnvironmentsHeaders;
}


export class GetDescribeEnvironmentsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
