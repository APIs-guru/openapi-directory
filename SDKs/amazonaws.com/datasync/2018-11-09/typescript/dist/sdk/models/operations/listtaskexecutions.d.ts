import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTaskExecutionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListTaskExecutionsXAmzTargetEnum {
    FmrsServiceListTaskExecutions = "FmrsService.ListTaskExecutions"
}
export declare class ListTaskExecutionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTaskExecutionsXAmzTargetEnum;
}
export declare class ListTaskExecutionsRequest extends SpeakeasyBase {
    queryParams: ListTaskExecutionsQueryParams;
    headers: ListTaskExecutionsHeaders;
    request: shared.ListTaskExecutionsRequest;
}
export declare class ListTaskExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    invalidRequestException?: any;
    listTaskExecutionsResponse?: shared.ListTaskExecutionsResponse;
    statusCode: number;
}
