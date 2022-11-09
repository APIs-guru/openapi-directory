import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UpdateLoggerDefinitionPathParams extends SpeakeasyBase {
    loggerDefinitionId: string;
}
export declare class UpdateLoggerDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateLoggerDefinitionRequestBody extends SpeakeasyBase {
    name?: string;
}
export declare class UpdateLoggerDefinitionRequest extends SpeakeasyBase {
    pathParams: UpdateLoggerDefinitionPathParams;
    headers: UpdateLoggerDefinitionHeaders;
    request: UpdateLoggerDefinitionRequestBody;
}
export declare class UpdateLoggerDefinitionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    statusCode: number;
    updateLoggerDefinitionResponse?: Map<string, any>;
}
