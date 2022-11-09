import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostUpdateServiceSpecificCredentialActionEnum {
    UpdateServiceSpecificCredential = "UpdateServiceSpecificCredential"
}
export declare enum PostUpdateServiceSpecificCredentialVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostUpdateServiceSpecificCredentialQueryParams extends SpeakeasyBase {
    action: PostUpdateServiceSpecificCredentialActionEnum;
    version: PostUpdateServiceSpecificCredentialVersionEnum;
}
export declare class PostUpdateServiceSpecificCredentialHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateServiceSpecificCredentialRequest extends SpeakeasyBase {
    queryParams: PostUpdateServiceSpecificCredentialQueryParams;
    headers: PostUpdateServiceSpecificCredentialHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateServiceSpecificCredentialResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
