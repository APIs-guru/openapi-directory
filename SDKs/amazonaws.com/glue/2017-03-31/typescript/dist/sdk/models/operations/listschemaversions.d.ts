import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListSchemaVersionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListSchemaVersionsXAmzTargetEnum {
    AwsGlueListSchemaVersions = "AWSGlue.ListSchemaVersions"
}
export declare class ListSchemaVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListSchemaVersionsXAmzTargetEnum;
}
export declare class ListSchemaVersionsRequest extends SpeakeasyBase {
    queryParams: ListSchemaVersionsQueryParams;
    headers: ListSchemaVersionsHeaders;
    request: shared.ListSchemaVersionsInput;
}
export declare class ListSchemaVersionsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    listSchemaVersionsResponse?: shared.ListSchemaVersionsResponse;
    statusCode: number;
}
