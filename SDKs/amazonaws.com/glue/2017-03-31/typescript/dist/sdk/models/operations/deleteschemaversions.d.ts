import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteSchemaVersionsXAmzTargetEnum {
    AwsGlueDeleteSchemaVersions = "AWSGlue.DeleteSchemaVersions"
}
export declare class DeleteSchemaVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteSchemaVersionsXAmzTargetEnum;
}
export declare class DeleteSchemaVersionsRequest extends SpeakeasyBase {
    headers: DeleteSchemaVersionsHeaders;
    request: shared.DeleteSchemaVersionsInput;
}
export declare class DeleteSchemaVersionsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    concurrentModificationException?: any;
    contentType: string;
    deleteSchemaVersionsResponse?: shared.DeleteSchemaVersionsResponse;
    entityNotFoundException?: any;
    invalidInputException?: any;
    statusCode: number;
}
