import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateComponentVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Contains information about an Lambda function to import to create a component.
**/
export declare class CreateComponentVersionRequestBodyLambdaFunction extends SpeakeasyBase {
    componentDependencies?: Map<string, shared.ComponentDependencyRequirement>;
    componentLambdaParameters?: shared.LambdaExecutionParameters;
    componentName?: string;
    componentPlatforms?: shared.ComponentPlatform[];
    componentVersion?: string;
    lambdaArn?: string;
}
export declare class CreateComponentVersionRequestBody extends SpeakeasyBase {
    clientToken?: string;
    inlineRecipe?: string;
    lambdaFunction?: CreateComponentVersionRequestBodyLambdaFunction;
    tags?: Map<string, string>;
}
export declare class CreateComponentVersionRequest extends SpeakeasyBase {
    headers: CreateComponentVersionHeaders;
    request: CreateComponentVersionRequestBody;
}
export declare class CreateComponentVersionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createComponentVersionResponse?: shared.CreateComponentVersionResponse;
    internalServerException?: any;
    requestAlreadyInProgressException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
