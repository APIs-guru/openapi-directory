import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateRemoteAccessSessionXAmzTargetEnum {
    DeviceFarm20150623CreateRemoteAccessSession = "DeviceFarm_20150623.CreateRemoteAccessSession"
}
export declare class CreateRemoteAccessSessionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateRemoteAccessSessionXAmzTargetEnum;
}
export declare class CreateRemoteAccessSessionRequest extends SpeakeasyBase {
    headers: CreateRemoteAccessSessionHeaders;
    request: shared.CreateRemoteAccessSessionRequest;
}
export declare class CreateRemoteAccessSessionResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    createRemoteAccessSessionResult?: shared.CreateRemoteAccessSessionResult;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
