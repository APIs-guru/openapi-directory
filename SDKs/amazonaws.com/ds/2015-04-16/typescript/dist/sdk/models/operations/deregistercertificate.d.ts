import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeregisterCertificateXAmzTargetEnum {
    DirectoryService20150416DeregisterCertificate = "DirectoryService_20150416.DeregisterCertificate"
}
export declare class DeregisterCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterCertificateXAmzTargetEnum;
}
export declare class DeregisterCertificateRequest extends SpeakeasyBase {
    headers: DeregisterCertificateHeaders;
    request: shared.DeregisterCertificateRequest;
}
export declare class DeregisterCertificateResponse extends SpeakeasyBase {
    certificateDoesNotExistException?: any;
    certificateInUseException?: any;
    clientException?: any;
    contentType: string;
    deregisterCertificateResult?: Map<string, any>;
    directoryDoesNotExistException?: any;
    directoryUnavailableException?: any;
    invalidParameterException?: any;
    serviceException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
