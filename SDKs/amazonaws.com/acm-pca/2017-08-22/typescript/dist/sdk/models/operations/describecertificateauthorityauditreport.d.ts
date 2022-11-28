import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeCertificateAuthorityAuditReportXAmzTargetEnum {
    AcmPrivateCaDescribeCertificateAuthorityAuditReport = "ACMPrivateCA.DescribeCertificateAuthorityAuditReport"
}
export declare class DescribeCertificateAuthorityAuditReportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCertificateAuthorityAuditReportXAmzTargetEnum;
}
export declare class DescribeCertificateAuthorityAuditReportRequest extends SpeakeasyBase {
    headers: DescribeCertificateAuthorityAuditReportHeaders;
    request: shared.DescribeCertificateAuthorityAuditReportRequest;
}
export declare class DescribeCertificateAuthorityAuditReportResponse extends SpeakeasyBase {
    contentType: string;
    describeCertificateAuthorityAuditReportResponse?: shared.DescribeCertificateAuthorityAuditReportResponse;
    invalidArgsException?: any;
    invalidArnException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
