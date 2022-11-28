import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeSnapshotsActionEnum {
    DescribeSnapshots = "DescribeSnapshots"
}
export declare enum PostDescribeSnapshotsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostDescribeSnapshotsQueryParams extends SpeakeasyBase {
    action: PostDescribeSnapshotsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeSnapshotsVersionEnum;
}
export declare class PostDescribeSnapshotsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeSnapshotsRequest extends SpeakeasyBase {
    queryParams: PostDescribeSnapshotsQueryParams;
    headers: PostDescribeSnapshotsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeSnapshotsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
