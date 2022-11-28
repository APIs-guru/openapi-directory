import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostListPoliciesGrantingServiceAccessActionEnum {
    ListPoliciesGrantingServiceAccess = "ListPoliciesGrantingServiceAccess"
}
export declare enum PostListPoliciesGrantingServiceAccessVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostListPoliciesGrantingServiceAccessQueryParams extends SpeakeasyBase {
    action: PostListPoliciesGrantingServiceAccessActionEnum;
    version: PostListPoliciesGrantingServiceAccessVersionEnum;
}
export declare class PostListPoliciesGrantingServiceAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListPoliciesGrantingServiceAccessRequest extends SpeakeasyBase {
    queryParams: PostListPoliciesGrantingServiceAccessQueryParams;
    headers: PostListPoliciesGrantingServiceAccessHeaders;
    request?: Uint8Array;
}
export declare class PostListPoliciesGrantingServiceAccessResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
