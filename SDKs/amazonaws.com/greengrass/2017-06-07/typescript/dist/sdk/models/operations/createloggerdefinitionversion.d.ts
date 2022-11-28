import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateLoggerDefinitionVersionPathParams extends SpeakeasyBase {
    loggerDefinitionId: string;
}
export declare class CreateLoggerDefinitionVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmznClientToken?: string;
}
export declare class CreateLoggerDefinitionVersionRequestBody extends SpeakeasyBase {
    loggers?: shared.Logger[];
}
export declare class CreateLoggerDefinitionVersionRequest extends SpeakeasyBase {
    pathParams: CreateLoggerDefinitionVersionPathParams;
    headers: CreateLoggerDefinitionVersionHeaders;
    request: CreateLoggerDefinitionVersionRequestBody;
}
export declare class CreateLoggerDefinitionVersionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createLoggerDefinitionVersionResponse?: shared.CreateLoggerDefinitionVersionResponse;
    statusCode: number;
}
