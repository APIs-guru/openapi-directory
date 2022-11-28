import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class QueryQueryParams extends SpeakeasyBase {
    exclusiveStartKey?: string;
    limit?: string;
}
export declare enum QueryXAmzTargetEnum {
    DynamoDb20120810Query = "DynamoDB_20120810.Query"
}
export declare class QueryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: QueryXAmzTargetEnum;
}
export declare class QueryRequest extends SpeakeasyBase {
    queryParams: QueryQueryParams;
    headers: QueryHeaders;
    request: shared.QueryInput;
}
export declare class QueryResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    provisionedThroughputExceededException?: any;
    queryOutput?: shared.QueryOutput;
    requestLimitExceeded?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
