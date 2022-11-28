import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopRemoteAccessSessionXAmzTargetEnum {
    DeviceFarm20150623StopRemoteAccessSession = "DeviceFarm_20150623.StopRemoteAccessSession"
}
export declare class StopRemoteAccessSessionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopRemoteAccessSessionXAmzTargetEnum;
}
export declare class StopRemoteAccessSessionRequest extends SpeakeasyBase {
    headers: StopRemoteAccessSessionHeaders;
    request: shared.StopRemoteAccessSessionRequest;
}
export declare class StopRemoteAccessSessionResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
    stopRemoteAccessSessionResult?: shared.StopRemoteAccessSessionResult;
}
