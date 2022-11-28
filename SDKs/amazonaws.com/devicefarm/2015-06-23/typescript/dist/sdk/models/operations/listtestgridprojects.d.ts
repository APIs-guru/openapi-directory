import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTestGridProjectsQueryParams extends SpeakeasyBase {
    maxResult?: string;
    nextToken?: string;
}
export declare enum ListTestGridProjectsXAmzTargetEnum {
    DeviceFarm20150623ListTestGridProjects = "DeviceFarm_20150623.ListTestGridProjects"
}
export declare class ListTestGridProjectsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTestGridProjectsXAmzTargetEnum;
}
export declare class ListTestGridProjectsRequest extends SpeakeasyBase {
    queryParams: ListTestGridProjectsQueryParams;
    headers: ListTestGridProjectsHeaders;
    request: shared.ListTestGridProjectsRequest;
}
export declare class ListTestGridProjectsResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    internalServiceException?: any;
    listTestGridProjectsResult?: shared.ListTestGridProjectsResult;
    statusCode: number;
}
