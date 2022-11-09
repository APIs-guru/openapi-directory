import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateServiceSpecificCredentialActionEnum {
    CreateServiceSpecificCredential = "CreateServiceSpecificCredential"
}
export declare enum PostCreateServiceSpecificCredentialVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostCreateServiceSpecificCredentialQueryParams extends SpeakeasyBase {
    action: PostCreateServiceSpecificCredentialActionEnum;
    version: PostCreateServiceSpecificCredentialVersionEnum;
}
export declare class PostCreateServiceSpecificCredentialHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateServiceSpecificCredentialRequest extends SpeakeasyBase {
    queryParams: PostCreateServiceSpecificCredentialQueryParams;
    headers: PostCreateServiceSpecificCredentialHeaders;
    request?: Uint8Array;
}
export declare class PostCreateServiceSpecificCredentialResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
