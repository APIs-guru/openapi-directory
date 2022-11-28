import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteRemoteAccessSessionXAmzTargetEnum {
    DeviceFarm20150623DeleteRemoteAccessSession = "DeviceFarm_20150623.DeleteRemoteAccessSession"
}
export declare class DeleteRemoteAccessSessionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRemoteAccessSessionXAmzTargetEnum;
}
export declare class DeleteRemoteAccessSessionRequest extends SpeakeasyBase {
    headers: DeleteRemoteAccessSessionHeaders;
    request: shared.DeleteRemoteAccessSessionRequest;
}
export declare class DeleteRemoteAccessSessionResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    deleteRemoteAccessSessionResult?: Map<string, any>;
    limitExceededException?: any;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
