import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostAttachGroupPolicyActionEnum {
    AttachGroupPolicy = "AttachGroupPolicy"
}
export declare enum PostAttachGroupPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostAttachGroupPolicyQueryParams extends SpeakeasyBase {
    action: PostAttachGroupPolicyActionEnum;
    version: PostAttachGroupPolicyVersionEnum;
}
export declare class PostAttachGroupPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAttachGroupPolicyRequest extends SpeakeasyBase {
    queryParams: PostAttachGroupPolicyQueryParams;
    headers: PostAttachGroupPolicyHeaders;
    request?: Uint8Array;
}
export declare class PostAttachGroupPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
