import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListGlobalTablesXAmzTargetEnum {
    DynamoDb20120810ListGlobalTables = "DynamoDB_20120810.ListGlobalTables"
}
export declare class ListGlobalTablesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListGlobalTablesXAmzTargetEnum;
}
export declare class ListGlobalTablesRequest extends SpeakeasyBase {
    headers: ListGlobalTablesHeaders;
    request: shared.ListGlobalTablesInput;
}
export declare class ListGlobalTablesResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    listGlobalTablesOutput?: shared.ListGlobalTablesOutput;
    statusCode: number;
}
