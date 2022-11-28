import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetModifyGlobalClusterActionEnum {
    ModifyGlobalCluster = "ModifyGlobalCluster"
}
export declare enum GetModifyGlobalClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetModifyGlobalClusterQueryParams extends SpeakeasyBase {
    action: GetModifyGlobalClusterActionEnum;
    deletionProtection?: boolean;
    globalClusterIdentifier: string;
    newGlobalClusterIdentifier?: string;
    version: GetModifyGlobalClusterVersionEnum;
}
export declare class GetModifyGlobalClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyGlobalClusterRequest extends SpeakeasyBase {
    queryParams: GetModifyGlobalClusterQueryParams;
    headers: GetModifyGlobalClusterHeaders;
}
export declare class GetModifyGlobalClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
