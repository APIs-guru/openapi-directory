import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeSnapshotsActionEnum {
    DescribeSnapshots = "DescribeSnapshots"
}

export enum GetDescribeSnapshotsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetDescribeSnapshotsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeSnapshotsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CacheClusterId" })
  cacheClusterId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReplicationGroupId" })
  replicationGroupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ShowNodeGroupConfig" })
  showNodeGroupConfig?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SnapshotName" })
  snapshotName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SnapshotSource" })
  snapshotSource?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeSnapshotsVersionEnum;
}


export class GetDescribeSnapshotsHeaders extends SpeakeasyBase {
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


export class GetDescribeSnapshotsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeSnapshotsQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeSnapshotsHeaders;
}


export class GetDescribeSnapshotsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
