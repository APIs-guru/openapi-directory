import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ExportCertificateXAmzTargetEnum {
    CertificateManagerExportCertificate = "CertificateManager.ExportCertificate"
}
export declare class ExportCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ExportCertificateXAmzTargetEnum;
}
export declare class ExportCertificateRequest extends SpeakeasyBase {
    headers: ExportCertificateHeaders;
    request: shared.ExportCertificateRequest;
}
export declare class ExportCertificateResponse extends SpeakeasyBase {
    contentType: string;
    exportCertificateResponse?: shared.ExportCertificateResponse;
    invalidArnException?: any;
    requestInProgressException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
