import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteServiceSpecificCredentialActionEnum {
    DeleteServiceSpecificCredential = "DeleteServiceSpecificCredential"
}
export declare enum PostDeleteServiceSpecificCredentialVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostDeleteServiceSpecificCredentialQueryParams extends SpeakeasyBase {
    action: PostDeleteServiceSpecificCredentialActionEnum;
    version: PostDeleteServiceSpecificCredentialVersionEnum;
}
export declare class PostDeleteServiceSpecificCredentialHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteServiceSpecificCredentialRequest extends SpeakeasyBase {
    queryParams: PostDeleteServiceSpecificCredentialQueryParams;
    headers: PostDeleteServiceSpecificCredentialHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteServiceSpecificCredentialResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
