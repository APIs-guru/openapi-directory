import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteSnapshotActionEnum {
    DeleteSnapshot = "DeleteSnapshot"
}
export declare enum GetDeleteSnapshotVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteSnapshotQueryParams extends SpeakeasyBase {
    action: GetDeleteSnapshotActionEnum;
    dryRun?: boolean;
    snapshotId: string;
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
    contentType: string;
    statusCode: number;
}
