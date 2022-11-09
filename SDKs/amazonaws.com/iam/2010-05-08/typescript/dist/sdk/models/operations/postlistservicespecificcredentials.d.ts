import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostListServiceSpecificCredentialsActionEnum {
    ListServiceSpecificCredentials = "ListServiceSpecificCredentials"
}
export declare enum PostListServiceSpecificCredentialsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostListServiceSpecificCredentialsQueryParams extends SpeakeasyBase {
    action: PostListServiceSpecificCredentialsActionEnum;
    version: PostListServiceSpecificCredentialsVersionEnum;
}
export declare class PostListServiceSpecificCredentialsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListServiceSpecificCredentialsRequest extends SpeakeasyBase {
    queryParams: PostListServiceSpecificCredentialsQueryParams;
    headers: PostListServiceSpecificCredentialsHeaders;
    request?: Uint8Array;
}
export declare class PostListServiceSpecificCredentialsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
