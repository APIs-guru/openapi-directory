import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteGlobalClusterActionEnum {
    DeleteGlobalCluster = "DeleteGlobalCluster"
}
export declare enum PostDeleteGlobalClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDeleteGlobalClusterQueryParams extends SpeakeasyBase {
    action: PostDeleteGlobalClusterActionEnum;
    version: PostDeleteGlobalClusterVersionEnum;
}
export declare class PostDeleteGlobalClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteGlobalClusterRequest extends SpeakeasyBase {
    queryParams: PostDeleteGlobalClusterQueryParams;
    headers: PostDeleteGlobalClusterHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteGlobalClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
