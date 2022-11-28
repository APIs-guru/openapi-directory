import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListQueryExecutionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListQueryExecutionsXAmzTargetEnum {
    AmazonAthenaListQueryExecutions = "AmazonAthena.ListQueryExecutions"
}
export declare class ListQueryExecutionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListQueryExecutionsXAmzTargetEnum;
}
export declare class ListQueryExecutionsRequest extends SpeakeasyBase {
    queryParams: ListQueryExecutionsQueryParams;
    headers: ListQueryExecutionsHeaders;
    request: shared.ListQueryExecutionsInput;
}
export declare class ListQueryExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    listQueryExecutionsOutput?: shared.ListQueryExecutionsOutput;
    statusCode: number;
}
