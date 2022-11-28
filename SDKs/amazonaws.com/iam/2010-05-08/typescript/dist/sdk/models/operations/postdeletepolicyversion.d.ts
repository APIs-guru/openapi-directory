import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeletePolicyVersionActionEnum {
    DeletePolicyVersion = "DeletePolicyVersion"
}
export declare enum PostDeletePolicyVersionVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostDeletePolicyVersionQueryParams extends SpeakeasyBase {
    action: PostDeletePolicyVersionActionEnum;
    version: PostDeletePolicyVersionVersionEnum;
}
export declare class PostDeletePolicyVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeletePolicyVersionRequest extends SpeakeasyBase {
    queryParams: PostDeletePolicyVersionQueryParams;
    headers: PostDeletePolicyVersionHeaders;
    request?: Uint8Array;
}
export declare class PostDeletePolicyVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
