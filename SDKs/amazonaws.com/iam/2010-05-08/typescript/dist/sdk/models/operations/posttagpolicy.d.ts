import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostTagPolicyActionEnum {
    TagPolicy = "TagPolicy"
}
export declare enum PostTagPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostTagPolicyQueryParams extends SpeakeasyBase {
    action: PostTagPolicyActionEnum;
    version: PostTagPolicyVersionEnum;
}
export declare class PostTagPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostTagPolicyRequest extends SpeakeasyBase {
    queryParams: PostTagPolicyQueryParams;
    headers: PostTagPolicyHeaders;
    request?: Uint8Array;
}
export declare class PostTagPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
