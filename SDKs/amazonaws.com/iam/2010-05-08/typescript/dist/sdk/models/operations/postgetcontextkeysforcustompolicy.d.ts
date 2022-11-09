import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetContextKeysForCustomPolicyActionEnum {
    GetContextKeysForCustomPolicy = "GetContextKeysForCustomPolicy"
}
export declare enum PostGetContextKeysForCustomPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostGetContextKeysForCustomPolicyQueryParams extends SpeakeasyBase {
    action: PostGetContextKeysForCustomPolicyActionEnum;
    version: PostGetContextKeysForCustomPolicyVersionEnum;
}
export declare class PostGetContextKeysForCustomPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetContextKeysForCustomPolicyRequest extends SpeakeasyBase {
    queryParams: PostGetContextKeysForCustomPolicyQueryParams;
    headers: PostGetContextKeysForCustomPolicyHeaders;
    request?: Uint8Array;
}
export declare class PostGetContextKeysForCustomPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
