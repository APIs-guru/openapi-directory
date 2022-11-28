import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostResetServiceSpecificCredentialActionEnum {
    ResetServiceSpecificCredential = "ResetServiceSpecificCredential"
}
export declare enum PostResetServiceSpecificCredentialVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostResetServiceSpecificCredentialQueryParams extends SpeakeasyBase {
    action: PostResetServiceSpecificCredentialActionEnum;
    version: PostResetServiceSpecificCredentialVersionEnum;
}
export declare class PostResetServiceSpecificCredentialHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostResetServiceSpecificCredentialRequest extends SpeakeasyBase {
    queryParams: PostResetServiceSpecificCredentialQueryParams;
    headers: PostResetServiceSpecificCredentialHeaders;
    request?: Uint8Array;
}
export declare class PostResetServiceSpecificCredentialResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
