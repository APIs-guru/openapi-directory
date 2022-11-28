import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListRunsQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum ListRunsXAmzTargetEnum {
    DeviceFarm20150623ListRuns = "DeviceFarm_20150623.ListRuns"
}
export declare class ListRunsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRunsXAmzTargetEnum;
}
export declare class ListRunsRequest extends SpeakeasyBase {
    queryParams: ListRunsQueryParams;
    headers: ListRunsHeaders;
    request: shared.ListRunsRequest;
}
export declare class ListRunsResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    limitExceededException?: any;
    listRunsResult?: shared.ListRunsResult;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}
