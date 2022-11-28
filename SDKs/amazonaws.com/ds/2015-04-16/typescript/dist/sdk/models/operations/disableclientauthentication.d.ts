import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisableClientAuthenticationXAmzTargetEnum {
    DirectoryService20150416DisableClientAuthentication = "DirectoryService_20150416.DisableClientAuthentication"
}
export declare class DisableClientAuthenticationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisableClientAuthenticationXAmzTargetEnum;
}
export declare class DisableClientAuthenticationRequest extends SpeakeasyBase {
    headers: DisableClientAuthenticationHeaders;
    request: shared.DisableClientAuthenticationRequest;
}
export declare class DisableClientAuthenticationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    clientException?: any;
    contentType: string;
    directoryDoesNotExistException?: any;
    disableClientAuthenticationResult?: Map<string, any>;
    invalidClientAuthStatusException?: any;
    serviceException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
