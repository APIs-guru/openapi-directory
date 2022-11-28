import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSchemaByDefinitionXAmzTargetEnum {
    AwsGlueGetSchemaByDefinition = "AWSGlue.GetSchemaByDefinition"
}
export declare class GetSchemaByDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSchemaByDefinitionXAmzTargetEnum;
}
export declare class GetSchemaByDefinitionRequest extends SpeakeasyBase {
    headers: GetSchemaByDefinitionHeaders;
    request: shared.GetSchemaByDefinitionInput;
}
export declare class GetSchemaByDefinitionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    entityNotFoundException?: any;
    getSchemaByDefinitionResponse?: shared.GetSchemaByDefinitionResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    statusCode: number;
}
