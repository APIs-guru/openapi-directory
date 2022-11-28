import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateFunctionDefinitionHeaders extends SpeakeasyBase {
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
 * Information about a function definition version.
**/
export declare class CreateFunctionDefinitionRequestBodyInitialVersion extends SpeakeasyBase {
    defaultConfig?: shared.FunctionDefaultConfig;
    functions?: shared.Function[];
}
export declare class CreateFunctionDefinitionRequestBody extends SpeakeasyBase {
    initialVersion?: CreateFunctionDefinitionRequestBodyInitialVersion;
    name?: string;
    tags?: Map<string, string>;
}
export declare class CreateFunctionDefinitionRequest extends SpeakeasyBase {
    headers: CreateFunctionDefinitionHeaders;
    request: CreateFunctionDefinitionRequestBody;
}
export declare class CreateFunctionDefinitionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createFunctionDefinitionResponse?: shared.CreateFunctionDefinitionResponse;
    statusCode: number;
}
