import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RegisterCertificateXAmzTargetEnum {
    DirectoryService20150416RegisterCertificate = "DirectoryService_20150416.RegisterCertificate"
}
export declare class RegisterCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterCertificateXAmzTargetEnum;
}
export declare class RegisterCertificateRequest extends SpeakeasyBase {
    headers: RegisterCertificateHeaders;
    request: shared.RegisterCertificateRequest;
}
export declare class RegisterCertificateResponse extends SpeakeasyBase {
    certificateAlreadyExistsException?: any;
    certificateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    directoryDoesNotExistException?: any;
    directoryUnavailableException?: any;
    invalidCertificateException?: any;
    invalidParameterException?: any;
    registerCertificateResult?: shared.RegisterCertificateResult;
    serviceException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
