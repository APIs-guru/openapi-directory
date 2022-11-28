import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPreparedStatementsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListPreparedStatementsXAmzTargetEnum {
    AmazonAthenaListPreparedStatements = "AmazonAthena.ListPreparedStatements"
}
export declare class ListPreparedStatementsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPreparedStatementsXAmzTargetEnum;
}
export declare class ListPreparedStatementsRequest extends SpeakeasyBase {
    queryParams: ListPreparedStatementsQueryParams;
    headers: ListPreparedStatementsHeaders;
    request: shared.ListPreparedStatementsInput;
}
export declare class ListPreparedStatementsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    listPreparedStatementsOutput?: shared.ListPreparedStatementsOutput;
    statusCode: number;
}
