import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyDbClusterActionEnum {
    ModifyDbCluster = "ModifyDBCluster"
}
export declare enum PostModifyDbClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostModifyDbClusterQueryParams extends SpeakeasyBase {
    action: PostModifyDbClusterActionEnum;
    version: PostModifyDbClusterVersionEnum;
}
export declare class PostModifyDbClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyDbClusterRequest extends SpeakeasyBase {
    queryParams: PostModifyDbClusterQueryParams;
    headers: PostModifyDbClusterHeaders;
    request?: Uint8Array;
}
export declare class PostModifyDbClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
