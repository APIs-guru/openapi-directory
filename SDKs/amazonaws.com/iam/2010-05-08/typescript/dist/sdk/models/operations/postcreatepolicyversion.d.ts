import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreatePolicyVersionActionEnum {
    CreatePolicyVersion = "CreatePolicyVersion"
}
export declare enum PostCreatePolicyVersionVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostCreatePolicyVersionQueryParams extends SpeakeasyBase {
    action: PostCreatePolicyVersionActionEnum;
    version: PostCreatePolicyVersionVersionEnum;
}
export declare class PostCreatePolicyVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreatePolicyVersionRequest extends SpeakeasyBase {
    queryParams: PostCreatePolicyVersionQueryParams;
    headers: PostCreatePolicyVersionHeaders;
    request?: Uint8Array;
}
export declare class PostCreatePolicyVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
