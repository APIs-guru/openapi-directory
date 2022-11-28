import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeSnapshotAttributeActionEnum {
    DescribeSnapshotAttribute = "DescribeSnapshotAttribute"
}
export declare enum GetDescribeSnapshotAttributeAttributeEnum {
    ProductCodes = "productCodes",
    CreateVolumePermission = "createVolumePermission"
}
export declare enum GetDescribeSnapshotAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDescribeSnapshotAttributeQueryParams extends SpeakeasyBase {
    action: GetDescribeSnapshotAttributeActionEnum;
    attribute: GetDescribeSnapshotAttributeAttributeEnum;
    dryRun?: boolean;
    snapshotId: string;
    version: GetDescribeSnapshotAttributeVersionEnum;
}
export declare class GetDescribeSnapshotAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeSnapshotAttributeRequest extends SpeakeasyBase {
    queryParams: GetDescribeSnapshotAttributeQueryParams;
    headers: GetDescribeSnapshotAttributeHeaders;
}
export declare class GetDescribeSnapshotAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
