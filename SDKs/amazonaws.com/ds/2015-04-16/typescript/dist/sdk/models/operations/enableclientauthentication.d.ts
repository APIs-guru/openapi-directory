import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum EnableClientAuthenticationXAmzTargetEnum {
    DirectoryService20150416EnableClientAuthentication = "DirectoryService_20150416.EnableClientAuthentication"
}
export declare class EnableClientAuthenticationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EnableClientAuthenticationXAmzTargetEnum;
}
export declare class EnableClientAuthenticationRequest extends SpeakeasyBase {
    headers: EnableClientAuthenticationHeaders;
    request: shared.EnableClientAuthenticationRequest;
}
export declare class EnableClientAuthenticationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    clientException?: any;
    contentType: string;
    directoryDoesNotExistException?: any;
    enableClientAuthenticationResult?: Map<string, any>;
    invalidClientAuthStatusException?: any;
    noAvailableCertificateException?: any;
    serviceException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
