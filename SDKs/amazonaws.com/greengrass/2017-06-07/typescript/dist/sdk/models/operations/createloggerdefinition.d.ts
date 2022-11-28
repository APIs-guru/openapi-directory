import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateLoggerDefinitionHeaders extends SpeakeasyBase {
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
 * Information about a logger definition version.
**/
export declare class CreateLoggerDefinitionRequestBodyInitialVersion extends SpeakeasyBase {
    loggers?: shared.Logger[];
}
export declare class CreateLoggerDefinitionRequestBody extends SpeakeasyBase {
    initialVersion?: CreateLoggerDefinitionRequestBodyInitialVersion;
    name?: string;
    tags?: Map<string, string>;
}
export declare class CreateLoggerDefinitionRequest extends SpeakeasyBase {
    headers: CreateLoggerDefinitionHeaders;
    request: CreateLoggerDefinitionRequestBody;
}
export declare class CreateLoggerDefinitionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createLoggerDefinitionResponse?: shared.CreateLoggerDefinitionResponse;
    statusCode: number;
}
