import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostListAllowedNodeTypeModificationsActionEnum {
    ListAllowedNodeTypeModifications = "ListAllowedNodeTypeModifications"
}
export declare enum PostListAllowedNodeTypeModificationsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostListAllowedNodeTypeModificationsQueryParams extends SpeakeasyBase {
    action: PostListAllowedNodeTypeModificationsActionEnum;
    version: PostListAllowedNodeTypeModificationsVersionEnum;
}
export declare class PostListAllowedNodeTypeModificationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListAllowedNodeTypeModificationsRequest extends SpeakeasyBase {
    queryParams: PostListAllowedNodeTypeModificationsQueryParams;
    headers: PostListAllowedNodeTypeModificationsHeaders;
    request?: Uint8Array;
}
export declare class PostListAllowedNodeTypeModificationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
