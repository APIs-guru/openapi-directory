import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListProjectsQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum ListProjectsXAmzTargetEnum {
    DeviceFarm20150623ListProjects = "DeviceFarm_20150623.ListProjects"
}
export declare class ListProjectsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListProjectsXAmzTargetEnum;
}
export declare class ListProjectsRequest extends SpeakeasyBase {
    queryParams: ListProjectsQueryParams;
    headers: ListProjectsHeaders;
    request: shared.ListProjectsRequest;
}
export declare class ListProjectsResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    limitExceededException?: any;
    listProjectsResult?: shared.ListProjectsResult;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
