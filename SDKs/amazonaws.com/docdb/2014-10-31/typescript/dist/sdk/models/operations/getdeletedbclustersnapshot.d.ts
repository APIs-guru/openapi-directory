import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteDbClusterSnapshotActionEnum {
    DeleteDbClusterSnapshot = "DeleteDBClusterSnapshot"
}
export declare enum GetDeleteDbClusterSnapshotVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetDeleteDbClusterSnapshotQueryParams extends SpeakeasyBase {
    action: GetDeleteDbClusterSnapshotActionEnum;
    dbClusterSnapshotIdentifier: string;
    version: GetDeleteDbClusterSnapshotVersionEnum;
}
export declare class GetDeleteDbClusterSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteDbClusterSnapshotRequest extends SpeakeasyBase {
    queryParams: GetDeleteDbClusterSnapshotQueryParams;
    headers: GetDeleteDbClusterSnapshotHeaders;
}
export declare class GetDeleteDbClusterSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
