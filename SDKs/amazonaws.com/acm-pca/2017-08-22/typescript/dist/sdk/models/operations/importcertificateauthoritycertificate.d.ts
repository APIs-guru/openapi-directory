import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ImportCertificateAuthorityCertificateXAmzTargetEnum {
    AcmPrivateCaImportCertificateAuthorityCertificate = "ACMPrivateCA.ImportCertificateAuthorityCertificate"
}
export declare class ImportCertificateAuthorityCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ImportCertificateAuthorityCertificateXAmzTargetEnum;
}
export declare class ImportCertificateAuthorityCertificateRequest extends SpeakeasyBase {
    headers: ImportCertificateAuthorityCertificateHeaders;
    request: shared.ImportCertificateAuthorityCertificateRequest;
}
export declare class ImportCertificateAuthorityCertificateResponse extends SpeakeasyBase {
    certificateMismatchException?: any;
    concurrentModificationException?: any;
    contentType: string;
    invalidArnException?: any;
    invalidRequestException?: any;
    invalidStateException?: any;
    malformedCertificateException?: any;
    requestFailedException?: any;
    requestInProgressException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
