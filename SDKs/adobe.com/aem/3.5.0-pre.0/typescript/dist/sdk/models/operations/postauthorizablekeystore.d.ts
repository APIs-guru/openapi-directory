import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAuthorizableKeystorePathParams extends SpeakeasyBase {
    authorizableId: string;
    intermediatePath: string;
}
export declare class PostAuthorizableKeystoreQueryParams extends SpeakeasyBase {
    operation?: string;
    alias?: string;
    currentPassword?: string;
    keyPassword?: string;
    keyStorePass?: string;
    newAlias?: string;
    newPassword?: string;
    rePassword?: string;
    removeAlias?: string;
}
export declare class PostAuthorizableKeystoreRequestBodyCertChain extends SpeakeasyBase {
    certChain: string;
    content: Uint8Array;
}
export declare class PostAuthorizableKeystoreRequestBodyKeyStore extends SpeakeasyBase {
    content: Uint8Array;
    keyStore: string;
}
export declare class PostAuthorizableKeystoreRequestBodyPk extends SpeakeasyBase {
    content: Uint8Array;
    pk: string;
}
export declare class PostAuthorizableKeystoreRequestBody extends SpeakeasyBase {
    certChain?: PostAuthorizableKeystoreRequestBodyCertChain;
    keyStore?: PostAuthorizableKeystoreRequestBodyKeyStore;
    pk?: PostAuthorizableKeystoreRequestBodyPk;
}
export declare class PostAuthorizableKeystoreRequest extends SpeakeasyBase {
    pathParams: PostAuthorizableKeystorePathParams;
    queryParams: PostAuthorizableKeystoreQueryParams;
    request?: PostAuthorizableKeystoreRequestBody;
}
export declare class PostAuthorizableKeystoreResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    postAuthorizableKeystoreDefaultTextPlainString?: string;
}
