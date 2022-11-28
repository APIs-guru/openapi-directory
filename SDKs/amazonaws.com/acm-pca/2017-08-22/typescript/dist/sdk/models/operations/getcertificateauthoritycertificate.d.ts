import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetCertificateAuthorityCertificateXAmzTargetEnum {
    AcmPrivateCaGetCertificateAuthorityCertificate = "ACMPrivateCA.GetCertificateAuthorityCertificate"
}
export declare class GetCertificateAuthorityCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCertificateAuthorityCertificateXAmzTargetEnum;
}
export declare class GetCertificateAuthorityCertificateRequest extends SpeakeasyBase {
    headers: GetCertificateAuthorityCertificateHeaders;
    request: shared.GetCertificateAuthorityCertificateRequest;
}
export declare class GetCertificateAuthorityCertificateResponse extends SpeakeasyBase {
    contentType: string;
    getCertificateAuthorityCertificateResponse?: shared.GetCertificateAuthorityCertificateResponse;
    invalidArnException?: any;
    invalidStateException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
