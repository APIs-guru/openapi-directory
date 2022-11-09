import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeletePolicyActionEnum {
    DeletePolicy = "DeletePolicy"
}
export declare enum PostDeletePolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostDeletePolicyQueryParams extends SpeakeasyBase {
    action: PostDeletePolicyActionEnum;
    version: PostDeletePolicyVersionEnum;
}
export declare class PostDeletePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeletePolicyRequest extends SpeakeasyBase {
    queryParams: PostDeletePolicyQueryParams;
    headers: PostDeletePolicyHeaders;
    request?: Uint8Array;
}
export declare class PostDeletePolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
