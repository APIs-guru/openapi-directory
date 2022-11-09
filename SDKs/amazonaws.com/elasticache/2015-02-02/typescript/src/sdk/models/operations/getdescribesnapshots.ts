import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeSnapshotsActionEnum {
    DescribeSnapshots = "DescribeSnapshots"
}

export enum GetDescribeSnapshotsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetDescribeSnapshotsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeSnapshotsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CacheClusterId" })
  cacheClusterId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ReplicationGroupId" })
  replicationGroupId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ShowNodeGroupConfig" })
  showNodeGroupConfig?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SnapshotName" })
  snapshotName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SnapshotSource" })
  snapshotSource?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeSnapshotsVersionEnum;
}


export class GetDescribeSnapshotsHeaders extends SpeakeasyBase {
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


export class GetDescribeSnapshotsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeSnapshotsQueryParams;

  @Metadata()
  headers: GetDescribeSnapshotsHeaders;
}


export class GetDescribeSnapshotsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
