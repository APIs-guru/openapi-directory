import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum InstallToRemoteAccessSessionXAmzTargetEnum {
    DeviceFarm20150623InstallToRemoteAccessSession = "DeviceFarm_20150623.InstallToRemoteAccessSession"
}
export declare class InstallToRemoteAccessSessionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: InstallToRemoteAccessSessionXAmzTargetEnum;
}
export declare class InstallToRemoteAccessSessionRequest extends SpeakeasyBase {
    headers: InstallToRemoteAccessSessionHeaders;
    request: shared.InstallToRemoteAccessSessionRequest;
}
export declare class InstallToRemoteAccessSessionResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    installToRemoteAccessSessionResult?: shared.InstallToRemoteAccessSessionResult;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
