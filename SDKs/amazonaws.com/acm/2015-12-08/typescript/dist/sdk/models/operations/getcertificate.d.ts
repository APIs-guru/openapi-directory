import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetCertificateXAmzTargetEnum {
    CertificateManagerGetCertificate = "CertificateManager.GetCertificate"
}
export declare class GetCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCertificateXAmzTargetEnum;
}
export declare class GetCertificateRequest extends SpeakeasyBase {
    headers: GetCertificateHeaders;
    request: shared.GetCertificateRequest;
}
export declare class GetCertificateResponse extends SpeakeasyBase {
    contentType: string;
    getCertificateResponse?: shared.GetCertificateResponse;
    invalidArnException?: any;
    requestInProgressException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
