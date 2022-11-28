import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeDbClusterSnapshotsActionEnum {
    DescribeDbClusterSnapshots = "DescribeDBClusterSnapshots"
}
export declare enum PostDescribeDbClusterSnapshotsVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDescribeDbClusterSnapshotsQueryParams extends SpeakeasyBase {
    action: PostDescribeDbClusterSnapshotsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeDbClusterSnapshotsVersionEnum;
}
export declare class PostDescribeDbClusterSnapshotsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeDbClusterSnapshotsRequest extends SpeakeasyBase {
    queryParams: PostDescribeDbClusterSnapshotsQueryParams;
    headers: PostDescribeDbClusterSnapshotsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeDbClusterSnapshotsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
