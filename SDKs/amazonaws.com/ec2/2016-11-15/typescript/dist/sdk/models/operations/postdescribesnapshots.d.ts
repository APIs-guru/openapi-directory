import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeSnapshotsActionEnum {
    DescribeSnapshots = "DescribeSnapshots"
}
export declare enum PostDescribeSnapshotsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeSnapshotsQueryParams extends SpeakeasyBase {
    action: PostDescribeSnapshotsActionEnum;
    maxResults?: string;
    nextToken?: string;
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
