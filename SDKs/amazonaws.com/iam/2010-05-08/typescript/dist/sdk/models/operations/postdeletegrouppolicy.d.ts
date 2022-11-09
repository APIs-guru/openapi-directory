import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteGroupPolicyActionEnum {
    DeleteGroupPolicy = "DeleteGroupPolicy"
}
export declare enum PostDeleteGroupPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostDeleteGroupPolicyQueryParams extends SpeakeasyBase {
    action: PostDeleteGroupPolicyActionEnum;
    version: PostDeleteGroupPolicyVersionEnum;
}
export declare class PostDeleteGroupPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteGroupPolicyRequest extends SpeakeasyBase {
    queryParams: PostDeleteGroupPolicyQueryParams;
    headers: PostDeleteGroupPolicyHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteGroupPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
