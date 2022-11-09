import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetPolicyVersionActionEnum {
    GetPolicyVersion = "GetPolicyVersion"
}
export declare enum PostGetPolicyVersionVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostGetPolicyVersionQueryParams extends SpeakeasyBase {
    action: PostGetPolicyVersionActionEnum;
    version: PostGetPolicyVersionVersionEnum;
}
export declare class PostGetPolicyVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetPolicyVersionRequest extends SpeakeasyBase {
    queryParams: PostGetPolicyVersionQueryParams;
    headers: PostGetPolicyVersionHeaders;
    request?: Uint8Array;
}
export declare class PostGetPolicyVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
