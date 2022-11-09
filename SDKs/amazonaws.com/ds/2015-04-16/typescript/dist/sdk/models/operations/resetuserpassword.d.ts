import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ResetUserPasswordXAmzTargetEnum {
    DirectoryService20150416ResetUserPassword = "DirectoryService_20150416.ResetUserPassword"
}
export declare class ResetUserPasswordHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ResetUserPasswordXAmzTargetEnum;
}
export declare class ResetUserPasswordRequest extends SpeakeasyBase {
    headers: ResetUserPasswordHeaders;
    request: shared.ResetUserPasswordRequest;
}
export declare class ResetUserPasswordResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    directoryUnavailableException?: any;
    entityDoesNotExistException?: any;
    invalidPasswordException?: any;
    resetUserPasswordResult?: Map<string, any>;
    serviceException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
    userDoesNotExistException?: any;
}
