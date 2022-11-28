import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCreateGlobalClusterActionEnum {
    CreateGlobalCluster = "CreateGlobalCluster"
}
export declare enum GetCreateGlobalClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetCreateGlobalClusterQueryParams extends SpeakeasyBase {
    action: GetCreateGlobalClusterActionEnum;
    databaseName?: string;
    deletionProtection?: boolean;
    engine?: string;
    engineVersion?: string;
    globalClusterIdentifier: string;
    sourceDbClusterIdentifier?: string;
    storageEncrypted?: boolean;
    version: GetCreateGlobalClusterVersionEnum;
}
export declare class GetCreateGlobalClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateGlobalClusterRequest extends SpeakeasyBase {
    queryParams: GetCreateGlobalClusterQueryParams;
    headers: GetCreateGlobalClusterHeaders;
}
export declare class GetCreateGlobalClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
