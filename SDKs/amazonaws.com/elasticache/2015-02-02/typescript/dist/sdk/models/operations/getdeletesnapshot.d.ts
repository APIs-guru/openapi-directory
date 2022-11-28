import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteSnapshotActionEnum {
    DeleteSnapshot = "DeleteSnapshot"
}
export declare enum GetDeleteSnapshotVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetDeleteSnapshotQueryParams extends SpeakeasyBase {
    action: GetDeleteSnapshotActionEnum;
    snapshotName: string;
    version: GetDeleteSnapshotVersionEnum;
}
export declare class GetDeleteSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteSnapshotRequest extends SpeakeasyBase {
    queryParams: GetDeleteSnapshotQueryParams;
    headers: GetDeleteSnapshotHeaders;
}
export declare class GetDeleteSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
