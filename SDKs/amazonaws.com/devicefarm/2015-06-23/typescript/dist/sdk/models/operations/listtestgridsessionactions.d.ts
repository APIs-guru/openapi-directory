import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTestGridSessionActionsQueryParams extends SpeakeasyBase {
    maxResult?: string;
    nextToken?: string;
}
export declare enum ListTestGridSessionActionsXAmzTargetEnum {
    DeviceFarm20150623ListTestGridSessionActions = "DeviceFarm_20150623.ListTestGridSessionActions"
}
export declare class ListTestGridSessionActionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTestGridSessionActionsXAmzTargetEnum;
}
export declare class ListTestGridSessionActionsRequest extends SpeakeasyBase {
    queryParams: ListTestGridSessionActionsQueryParams;
    headers: ListTestGridSessionActionsHeaders;
    request: shared.ListTestGridSessionActionsRequest;
}
export declare class ListTestGridSessionActionsResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    internalServiceException?: any;
    listTestGridSessionActionsResult?: shared.ListTestGridSessionActionsResult;
    notFoundException?: any;
    statusCode: number;
}
