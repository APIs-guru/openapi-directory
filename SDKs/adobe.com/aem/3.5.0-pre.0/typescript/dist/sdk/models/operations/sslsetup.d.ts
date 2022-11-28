import { SpeakeasyBase } from "../../../internal/utils";
export declare class SslSetupQueryParams extends SpeakeasyBase {
    httpsHostname: string;
    httpsPort: string;
    keystorePassword: string;
    keystorePasswordConfirm: string;
    truststorePassword: string;
    truststorePasswordConfirm: string;
}
export declare class SslSetupRequestBodyCertificateFile extends SpeakeasyBase {
    certificateFile: string;
    content: Uint8Array;
}
export declare class SslSetupRequestBodyPrivatekeyFile extends SpeakeasyBase {
    content: Uint8Array;
    privatekeyFile: string;
}
export declare class SslSetupRequestBody extends SpeakeasyBase {
    certificateFile?: SslSetupRequestBodyCertificateFile;
    privatekeyFile?: SslSetupRequestBodyPrivatekeyFile;
}
export declare class SslSetupRequest extends SpeakeasyBase {
    queryParams: SslSetupQueryParams;
    request?: SslSetupRequestBody;
}
export declare class SslSetupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    sslSetupDefaultTextPlainString?: string;
}
