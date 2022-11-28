import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTablesQueryParams extends SpeakeasyBase {
    exclusiveStartTableName?: string;
    limit?: string;
}
export declare enum ListTablesXAmzTargetEnum {
    DynamoDb20111205ListTables = "DynamoDB_20111205.ListTables"
}
export declare class ListTablesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTablesXAmzTargetEnum;
}
export declare class ListTablesRequest extends SpeakeasyBase {
    queryParams: ListTablesQueryParams;
    headers: ListTablesHeaders;
    request: shared.ListTablesInput;
}
export declare class ListTablesResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    listTablesOutput?: shared.ListTablesOutput;
    statusCode: number;
}
