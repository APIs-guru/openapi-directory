import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetResetSnapshotAttributeActionEnum {
    ResetSnapshotAttribute = "ResetSnapshotAttribute"
}
export declare enum GetResetSnapshotAttributeAttributeEnum {
    ProductCodes = "productCodes",
    CreateVolumePermission = "createVolumePermission"
}
export declare enum GetResetSnapshotAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetResetSnapshotAttributeQueryParams extends SpeakeasyBase {
    action: GetResetSnapshotAttributeActionEnum;
    attribute: GetResetSnapshotAttributeAttributeEnum;
    dryRun?: boolean;
    snapshotId: string;
    version: GetResetSnapshotAttributeVersionEnum;
}
export declare class GetResetSnapshotAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetResetSnapshotAttributeRequest extends SpeakeasyBase {
    queryParams: GetResetSnapshotAttributeQueryParams;
    headers: GetResetSnapshotAttributeHeaders;
}
export declare class GetResetSnapshotAttributeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
