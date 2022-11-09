import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostFailoverDbClusterActionEnum {
    FailoverDbCluster = "FailoverDBCluster"
}
export declare enum PostFailoverDbClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostFailoverDbClusterQueryParams extends SpeakeasyBase {
    action: PostFailoverDbClusterActionEnum;
    version: PostFailoverDbClusterVersionEnum;
}
export declare class PostFailoverDbClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostFailoverDbClusterRequest extends SpeakeasyBase {
    queryParams: PostFailoverDbClusterQueryParams;
    headers: PostFailoverDbClusterHeaders;
    request?: Uint8Array;
}
export declare class PostFailoverDbClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
