import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListExportsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListExportsXAmzTargetEnum {
    DynamoDb20120810ListExports = "DynamoDB_20120810.ListExports"
}
export declare class ListExportsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListExportsXAmzTargetEnum;
}
export declare class ListExportsRequest extends SpeakeasyBase {
    queryParams: ListExportsQueryParams;
    headers: ListExportsHeaders;
    request: shared.ListExportsInput;
}
export declare class ListExportsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    limitExceededException?: any;
    listExportsOutput?: shared.ListExportsOutput;
    statusCode: number;
}
