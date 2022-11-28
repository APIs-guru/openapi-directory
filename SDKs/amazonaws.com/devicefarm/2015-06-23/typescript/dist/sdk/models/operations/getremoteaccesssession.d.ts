import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetRemoteAccessSessionXAmzTargetEnum {
    DeviceFarm20150623GetRemoteAccessSession = "DeviceFarm_20150623.GetRemoteAccessSession"
}
export declare class GetRemoteAccessSessionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRemoteAccessSessionXAmzTargetEnum;
}
export declare class GetRemoteAccessSessionRequest extends SpeakeasyBase {
    headers: GetRemoteAccessSessionHeaders;
    request: shared.GetRemoteAccessSessionRequest;
}
export declare class GetRemoteAccessSessionResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    getRemoteAccessSessionResult?: shared.GetRemoteAccessSessionResult;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
