import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostConfigApacheFelixJettyBasedHttpServiceQueryParams extends SpeakeasyBase {
    orgApacheFelixHttpsClientcertificate?: string;
    orgApacheFelixHttpsClientcertificateAtTypeHint?: string;
    orgApacheFelixHttpsEnable?: boolean;
    orgApacheFelixHttpsEnableAtTypeHint?: string;
    orgApacheFelixHttpsKeystore?: string;
    orgApacheFelixHttpsKeystoreKey?: string;
    orgApacheFelixHttpsKeystoreKeyPassword?: string;
    orgApacheFelixHttpsKeystoreKeyPasswordAtTypeHint?: string;
    orgApacheFelixHttpsKeystoreKeyAtTypeHint?: string;
    orgApacheFelixHttpsKeystorePassword?: string;
    orgApacheFelixHttpsKeystorePasswordAtTypeHint?: string;
    orgApacheFelixHttpsKeystoreAtTypeHint?: string;
    orgApacheFelixHttpsNio?: boolean;
    orgApacheFelixHttpsNioAtTypeHint?: string;
    orgApacheFelixHttpsTruststore?: string;
    orgApacheFelixHttpsTruststorePassword?: string;
    orgApacheFelixHttpsTruststorePasswordAtTypeHint?: string;
    orgApacheFelixHttpsTruststoreAtTypeHint?: string;
    orgOsgiServiceHttpPortSecure?: string;
    orgOsgiServiceHttpPortSecureAtTypeHint?: string;
}
export declare class PostConfigApacheFelixJettyBasedHttpServiceRequest extends SpeakeasyBase {
    queryParams: PostConfigApacheFelixJettyBasedHttpServiceQueryParams;
}
export declare class PostConfigApacheFelixJettyBasedHttpServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
