import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListSchemasQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListSchemasXAmzTargetEnum {
    AwsGlueListSchemas = "AWSGlue.ListSchemas"
}
export declare class ListSchemasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListSchemasXAmzTargetEnum;
}
export declare class ListSchemasRequest extends SpeakeasyBase {
    queryParams: ListSchemasQueryParams;
    headers: ListSchemasHeaders;
    request: shared.ListSchemasInput;
}
export declare class ListSchemasResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    listSchemasResponse?: shared.ListSchemasResponse;
    statusCode: number;
}
