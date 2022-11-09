import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum RenewCertificateXAmzTargetEnum {
    CertificateManagerRenewCertificate = "CertificateManager.RenewCertificate"
}
export declare class RenewCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RenewCertificateXAmzTargetEnum;
}
export declare class RenewCertificateRequest extends SpeakeasyBase {
    headers: RenewCertificateHeaders;
    request: shared.RenewCertificateRequest;
}
export declare class RenewCertificateResponse extends SpeakeasyBase {
    contentType: string;
    invalidArnException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
