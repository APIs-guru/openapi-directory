import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeEventsActionEnum {
    DescribeEvents = "DescribeEvents"
}

export enum GetDescribeEventsSourceTypeEnum {
    CacheCluster = "cache-cluster"
,    CacheParameterGroup = "cache-parameter-group"
,    CacheSecurityGroup = "cache-security-group"
,    CacheSubnetGroup = "cache-subnet-group"
,    ReplicationGroup = "replication-group"
,    User = "user"
,    UserGroup = "user-group"
}

export enum GetDescribeEventsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetDescribeEventsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeEventsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Duration" })
  duration?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SourceIdentifier" })
  sourceIdentifier?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SourceType" })
  sourceType?: GetDescribeEventsSourceTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeEventsVersionEnum;
}


export class GetDescribeEventsHeaders extends SpeakeasyBase {
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


export class GetDescribeEventsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeEventsQueryParams;

  @Metadata()
  headers: GetDescribeEventsHeaders;
}


export class GetDescribeEventsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
