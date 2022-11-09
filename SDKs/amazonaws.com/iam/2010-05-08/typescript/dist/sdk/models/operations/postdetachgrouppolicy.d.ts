import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDetachGroupPolicyActionEnum {
    DetachGroupPolicy = "DetachGroupPolicy"
}
export declare enum PostDetachGroupPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostDetachGroupPolicyQueryParams extends SpeakeasyBase {
    action: PostDetachGroupPolicyActionEnum;
    version: PostDetachGroupPolicyVersionEnum;
}
export declare class PostDetachGroupPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDetachGroupPolicyRequest extends SpeakeasyBase {
    queryParams: PostDetachGroupPolicyQueryParams;
    headers: PostDetachGroupPolicyHeaders;
    request?: Uint8Array;
}
export declare class PostDetachGroupPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
