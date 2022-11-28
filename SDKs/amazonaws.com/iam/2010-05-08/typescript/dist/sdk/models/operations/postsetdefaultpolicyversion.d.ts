import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostSetDefaultPolicyVersionActionEnum {
    SetDefaultPolicyVersion = "SetDefaultPolicyVersion"
}
export declare enum PostSetDefaultPolicyVersionVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostSetDefaultPolicyVersionQueryParams extends SpeakeasyBase {
    action: PostSetDefaultPolicyVersionActionEnum;
    version: PostSetDefaultPolicyVersionVersionEnum;
}
export declare class PostSetDefaultPolicyVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSetDefaultPolicyVersionRequest extends SpeakeasyBase {
    queryParams: PostSetDefaultPolicyVersionQueryParams;
    headers: PostSetDefaultPolicyVersionHeaders;
    request?: Uint8Array;
}
export declare class PostSetDefaultPolicyVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
