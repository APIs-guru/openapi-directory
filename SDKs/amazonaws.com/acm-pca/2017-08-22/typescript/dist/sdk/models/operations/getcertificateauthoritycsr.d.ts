import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetCertificateAuthorityCsrXAmzTargetEnum {
    AcmPrivateCaGetCertificateAuthorityCsr = "ACMPrivateCA.GetCertificateAuthorityCsr"
}
export declare class GetCertificateAuthorityCsrHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCertificateAuthorityCsrXAmzTargetEnum;
}
export declare class GetCertificateAuthorityCsrRequest extends SpeakeasyBase {
    headers: GetCertificateAuthorityCsrHeaders;
    request: shared.GetCertificateAuthorityCsrRequest;
}
export declare class GetCertificateAuthorityCsrResponse extends SpeakeasyBase {
    contentType: string;
    getCertificateAuthorityCsrResponse?: shared.GetCertificateAuthorityCsrResponse;
    invalidArnException?: any;
    invalidStateException?: any;
    requestFailedException?: any;
    requestInProgressException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
