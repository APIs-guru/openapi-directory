import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostTruststoreQueryParams extends SpeakeasyBase {
    operation?: string;
    keyStoreType?: string;
    newPassword?: string;
    rePassword?: string;
    removeAlias?: string;
}
export declare class PostTruststoreRequestBodyCertificate extends SpeakeasyBase {
    certificate: string;
    content: Uint8Array;
}
export declare class PostTruststoreRequestBody extends SpeakeasyBase {
    certificate?: PostTruststoreRequestBodyCertificate;
}
export declare class PostTruststoreRequest extends SpeakeasyBase {
    queryParams: PostTruststoreQueryParams;
    request?: PostTruststoreRequestBody;
}
export declare class PostTruststoreResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postTruststoreDefaultTextPlainString?: string;
}
