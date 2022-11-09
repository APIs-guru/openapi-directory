import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostRestoreDbClusterFromSnapshotActionEnum {
    RestoreDbClusterFromSnapshot = "RestoreDBClusterFromSnapshot"
}
export declare enum PostRestoreDbClusterFromSnapshotVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostRestoreDbClusterFromSnapshotQueryParams extends SpeakeasyBase {
    action: PostRestoreDbClusterFromSnapshotActionEnum;
    version: PostRestoreDbClusterFromSnapshotVersionEnum;
}
export declare class PostRestoreDbClusterFromSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRestoreDbClusterFromSnapshotRequest extends SpeakeasyBase {
    queryParams: PostRestoreDbClusterFromSnapshotQueryParams;
    headers: PostRestoreDbClusterFromSnapshotHeaders;
    request?: Uint8Array;
}
export declare class PostRestoreDbClusterFromSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
