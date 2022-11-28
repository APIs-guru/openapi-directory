import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateSchemaXAmzTargetEnum {
    AwsGlueCreateSchema = "AWSGlue.CreateSchema"
}
export declare class CreateSchemaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateSchemaXAmzTargetEnum;
}
export declare class CreateSchemaRequest extends SpeakeasyBase {
    headers: CreateSchemaHeaders;
    request: shared.CreateSchemaInput;
}
export declare class CreateSchemaResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    alreadyExistsException?: any;
    contentType: string;
    createSchemaResponse?: shared.CreateSchemaResponse;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    resourceNumberLimitExceededException?: any;
    statusCode: number;
}
