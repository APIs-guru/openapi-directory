import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostRemoveFromGlobalClusterActionEnum {
    RemoveFromGlobalCluster = "RemoveFromGlobalCluster"
}
export declare enum PostRemoveFromGlobalClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostRemoveFromGlobalClusterQueryParams extends SpeakeasyBase {
    action: PostRemoveFromGlobalClusterActionEnum;
    version: PostRemoveFromGlobalClusterVersionEnum;
}
export declare class PostRemoveFromGlobalClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRemoveFromGlobalClusterRequest extends SpeakeasyBase {
    queryParams: PostRemoveFromGlobalClusterQueryParams;
    headers: PostRemoveFromGlobalClusterHeaders;
    request?: Uint8Array;
}
export declare class PostRemoveFromGlobalClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
