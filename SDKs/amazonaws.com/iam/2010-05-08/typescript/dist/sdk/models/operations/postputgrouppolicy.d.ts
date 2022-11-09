import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostPutGroupPolicyActionEnum {
    PutGroupPolicy = "PutGroupPolicy"
}
export declare enum PostPutGroupPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostPutGroupPolicyQueryParams extends SpeakeasyBase {
    action: PostPutGroupPolicyActionEnum;
    version: PostPutGroupPolicyVersionEnum;
}
export declare class PostPutGroupPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostPutGroupPolicyRequest extends SpeakeasyBase {
    queryParams: PostPutGroupPolicyQueryParams;
    headers: PostPutGroupPolicyHeaders;
    request?: Uint8Array;
}
export declare class PostPutGroupPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
