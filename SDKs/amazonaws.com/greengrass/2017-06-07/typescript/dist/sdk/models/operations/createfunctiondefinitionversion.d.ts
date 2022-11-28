import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateFunctionDefinitionVersionPathParams extends SpeakeasyBase {
    functionDefinitionId: string;
}
export declare class CreateFunctionDefinitionVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmznClientToken?: string;
}
/**
 * The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings.
**/
export declare class CreateFunctionDefinitionVersionRequestBodyDefaultConfig extends SpeakeasyBase {
    execution?: shared.FunctionDefaultExecutionConfig;
}
export declare class CreateFunctionDefinitionVersionRequestBody extends SpeakeasyBase {
    defaultConfig?: CreateFunctionDefinitionVersionRequestBodyDefaultConfig;
    functions?: shared.Function[];
}
export declare class CreateFunctionDefinitionVersionRequest extends SpeakeasyBase {
    pathParams: CreateFunctionDefinitionVersionPathParams;
    headers: CreateFunctionDefinitionVersionHeaders;
    request: CreateFunctionDefinitionVersionRequestBody;
}
export declare class CreateFunctionDefinitionVersionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createFunctionDefinitionVersionResponse?: shared.CreateFunctionDefinitionVersionResponse;
    statusCode: number;
}
