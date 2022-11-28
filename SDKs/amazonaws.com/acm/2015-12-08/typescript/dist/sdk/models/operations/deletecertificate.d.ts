import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteCertificateXAmzTargetEnum {
    CertificateManagerDeleteCertificate = "CertificateManager.DeleteCertificate"
}
export declare class DeleteCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteCertificateXAmzTargetEnum;
}
export declare class DeleteCertificateRequest extends SpeakeasyBase {
    headers: DeleteCertificateHeaders;
    request: shared.DeleteCertificateRequest;
}
export declare class DeleteCertificateResponse extends SpeakeasyBase {
    contentType: string;
    invalidArnException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
