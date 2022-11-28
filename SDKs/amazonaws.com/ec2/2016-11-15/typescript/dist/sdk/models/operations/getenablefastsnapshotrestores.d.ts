import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetEnableFastSnapshotRestoresActionEnum {
    EnableFastSnapshotRestores = "EnableFastSnapshotRestores"
}
export declare enum GetEnableFastSnapshotRestoresVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetEnableFastSnapshotRestoresQueryParams extends SpeakeasyBase {
    action: GetEnableFastSnapshotRestoresActionEnum;
    availabilityZone: string[];
    dryRun?: boolean;
    sourceSnapshotId: string[];
    version: GetEnableFastSnapshotRestoresVersionEnum;
}
export declare class GetEnableFastSnapshotRestoresHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEnableFastSnapshotRestoresRequest extends SpeakeasyBase {
    queryParams: GetEnableFastSnapshotRestoresQueryParams;
    headers: GetEnableFastSnapshotRestoresHeaders;
}
export declare class GetEnableFastSnapshotRestoresResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
