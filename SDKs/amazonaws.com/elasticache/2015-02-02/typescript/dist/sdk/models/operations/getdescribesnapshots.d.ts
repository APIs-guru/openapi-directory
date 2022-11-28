import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeSnapshotsActionEnum {
    DescribeSnapshots = "DescribeSnapshots"
}
export declare enum GetDescribeSnapshotsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetDescribeSnapshotsQueryParams extends SpeakeasyBase {
    action: GetDescribeSnapshotsActionEnum;
    cacheClusterId?: string;
    marker?: string;
    maxRecords?: number;
    replicationGroupId?: string;
    showNodeGroupConfig?: boolean;
    snapshotName?: string;
    snapshotSource?: string;
    version: GetDescribeSnapshotsVersionEnum;
}
export declare class GetDescribeSnapshotsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeSnapshotsRequest extends SpeakeasyBase {
    queryParams: GetDescribeSnapshotsQueryParams;
    headers: GetDescribeSnapshotsHeaders;
}
export declare class GetDescribeSnapshotsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
