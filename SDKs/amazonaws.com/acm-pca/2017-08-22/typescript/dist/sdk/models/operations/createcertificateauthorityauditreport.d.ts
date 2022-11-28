import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateCertificateAuthorityAuditReportXAmzTargetEnum {
    AcmPrivateCaCreateCertificateAuthorityAuditReport = "ACMPrivateCA.CreateCertificateAuthorityAuditReport"
}
export declare class CreateCertificateAuthorityAuditReportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateCertificateAuthorityAuditReportXAmzTargetEnum;
}
export declare class CreateCertificateAuthorityAuditReportRequest extends SpeakeasyBase {
    headers: CreateCertificateAuthorityAuditReportHeaders;
    request: shared.CreateCertificateAuthorityAuditReportRequest;
}
export declare class CreateCertificateAuthorityAuditReportResponse extends SpeakeasyBase {
    contentType: string;
    createCertificateAuthorityAuditReportResponse?: shared.CreateCertificateAuthorityAuditReportResponse;
    invalidArgsException?: any;
    invalidArnException?: any;
    invalidStateException?: any;
    requestFailedException?: any;
    requestInProgressException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
