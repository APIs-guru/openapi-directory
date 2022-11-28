import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListRemoteAccessSessionsXAmzTargetEnum {
    DeviceFarm20150623ListRemoteAccessSessions = "DeviceFarm_20150623.ListRemoteAccessSessions"
}
export declare class ListRemoteAccessSessionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRemoteAccessSessionsXAmzTargetEnum;
}
export declare class ListRemoteAccessSessionsRequest extends SpeakeasyBase {
    headers: ListRemoteAccessSessionsHeaders;
    request: shared.ListRemoteAccessSessionsRequest;
}
export declare class ListRemoteAccessSessionsResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    limitExceededException?: any;
    listRemoteAccessSessionsResult?: shared.ListRemoteAccessSessionsResult;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
