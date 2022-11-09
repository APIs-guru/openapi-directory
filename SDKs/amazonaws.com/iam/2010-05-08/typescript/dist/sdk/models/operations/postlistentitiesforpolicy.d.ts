import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostListEntitiesForPolicyActionEnum {
    ListEntitiesForPolicy = "ListEntitiesForPolicy"
}
export declare enum PostListEntitiesForPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostListEntitiesForPolicyQueryParams extends SpeakeasyBase {
    action: PostListEntitiesForPolicyActionEnum;
    marker?: string;
    maxItems?: string;
    version: PostListEntitiesForPolicyVersionEnum;
}
export declare class PostListEntitiesForPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListEntitiesForPolicyRequest extends SpeakeasyBase {
    queryParams: PostListEntitiesForPolicyQueryParams;
    headers: PostListEntitiesForPolicyHeaders;
    request?: Uint8Array;
}
export declare class PostListEntitiesForPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
