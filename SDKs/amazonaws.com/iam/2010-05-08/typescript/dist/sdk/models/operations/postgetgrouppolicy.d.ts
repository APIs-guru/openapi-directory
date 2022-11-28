import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetGroupPolicyActionEnum {
    GetGroupPolicy = "GetGroupPolicy"
}
export declare enum PostGetGroupPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostGetGroupPolicyQueryParams extends SpeakeasyBase {
    action: PostGetGroupPolicyActionEnum;
    version: PostGetGroupPolicyVersionEnum;
}
export declare class PostGetGroupPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetGroupPolicyRequest extends SpeakeasyBase {
    queryParams: PostGetGroupPolicyQueryParams;
    headers: PostGetGroupPolicyHeaders;
    request?: Uint8Array;
}
export declare class PostGetGroupPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
