import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTestGridSessionsQueryParams extends SpeakeasyBase {
    maxResult?: string;
    nextToken?: string;
}
export declare enum ListTestGridSessionsXAmzTargetEnum {
    DeviceFarm20150623ListTestGridSessions = "DeviceFarm_20150623.ListTestGridSessions"
}
export declare class ListTestGridSessionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTestGridSessionsXAmzTargetEnum;
}
export declare class ListTestGridSessionsRequest extends SpeakeasyBase {
    queryParams: ListTestGridSessionsQueryParams;
    headers: ListTestGridSessionsHeaders;
    request: shared.ListTestGridSessionsRequest;
}
export declare class ListTestGridSessionsResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    internalServiceException?: any;
    listTestGridSessionsResult?: shared.ListTestGridSessionsResult;
    notFoundException?: any;
    statusCode: number;
}
