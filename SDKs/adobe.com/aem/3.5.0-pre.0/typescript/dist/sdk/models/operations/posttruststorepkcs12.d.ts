import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostTruststorePkcs12RequestBodyTruststoreP12 extends SpeakeasyBase {
    content: Uint8Array;
    truststoreP12: string;
}
export declare class PostTruststorePkcs12RequestBody extends SpeakeasyBase {
    truststoreP12?: PostTruststorePkcs12RequestBodyTruststoreP12;
}
export declare class PostTruststorePkcs12Request extends SpeakeasyBase {
    request?: PostTruststorePkcs12RequestBody;
}
export declare class PostTruststorePkcs12Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postTruststorePkcs12DefaultTextPlainString?: string;
}
