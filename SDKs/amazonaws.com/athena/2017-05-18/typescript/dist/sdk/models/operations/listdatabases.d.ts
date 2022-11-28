import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDatabasesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListDatabasesXAmzTargetEnum {
    AmazonAthenaListDatabases = "AmazonAthena.ListDatabases"
}
export declare class ListDatabasesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDatabasesXAmzTargetEnum;
}
export declare class ListDatabasesRequest extends SpeakeasyBase {
    queryParams: ListDatabasesQueryParams;
    headers: ListDatabasesHeaders;
    request: shared.ListDatabasesInput;
}
export declare class ListDatabasesResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    listDatabasesOutput?: shared.ListDatabasesOutput;
    metadataException?: any;
    statusCode: number;
}
