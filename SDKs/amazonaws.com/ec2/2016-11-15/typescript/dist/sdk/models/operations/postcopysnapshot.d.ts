import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCopySnapshotActionEnum {
    CopySnapshot = "CopySnapshot"
}
export declare enum PostCopySnapshotVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCopySnapshotQueryParams extends SpeakeasyBase {
    action: PostCopySnapshotActionEnum;
    version: PostCopySnapshotVersionEnum;
}
export declare class PostCopySnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCopySnapshotRequest extends SpeakeasyBase {
    queryParams: PostCopySnapshotQueryParams;
    headers: PostCopySnapshotHeaders;
    request?: Uint8Array;
}
export declare class PostCopySnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
