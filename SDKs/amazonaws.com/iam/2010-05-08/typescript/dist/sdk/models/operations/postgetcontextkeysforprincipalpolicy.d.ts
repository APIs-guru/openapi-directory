import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetContextKeysForPrincipalPolicyActionEnum {
    GetContextKeysForPrincipalPolicy = "GetContextKeysForPrincipalPolicy"
}
export declare enum PostGetContextKeysForPrincipalPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostGetContextKeysForPrincipalPolicyQueryParams extends SpeakeasyBase {
    action: PostGetContextKeysForPrincipalPolicyActionEnum;
    version: PostGetContextKeysForPrincipalPolicyVersionEnum;
}
export declare class PostGetContextKeysForPrincipalPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetContextKeysForPrincipalPolicyRequest extends SpeakeasyBase {
    queryParams: PostGetContextKeysForPrincipalPolicyQueryParams;
    headers: PostGetContextKeysForPrincipalPolicyHeaders;
    request?: Uint8Array;
}
export declare class PostGetContextKeysForPrincipalPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
