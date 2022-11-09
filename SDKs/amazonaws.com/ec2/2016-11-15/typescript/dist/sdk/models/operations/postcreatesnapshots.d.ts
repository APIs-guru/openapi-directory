import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateSnapshotsActionEnum {
    CreateSnapshots = "CreateSnapshots"
}
export declare enum PostCreateSnapshotsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateSnapshotsQueryParams extends SpeakeasyBase {
    action: PostCreateSnapshotsActionEnum;
    version: PostCreateSnapshotsVersionEnum;
}
export declare class PostCreateSnapshotsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateSnapshotsRequest extends SpeakeasyBase {
    queryParams: PostCreateSnapshotsQueryParams;
    headers: PostCreateSnapshotsHeaders;
    request?: Uint8Array;
}
export declare class PostCreateSnapshotsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
