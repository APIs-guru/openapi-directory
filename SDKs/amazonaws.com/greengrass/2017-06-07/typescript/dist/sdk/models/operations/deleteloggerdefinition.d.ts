import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteLoggerDefinitionPathParams extends SpeakeasyBase {
    loggerDefinitionId: string;
}
export declare class DeleteLoggerDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteLoggerDefinitionRequest extends SpeakeasyBase {
    pathParams: DeleteLoggerDefinitionPathParams;
    headers: DeleteLoggerDefinitionHeaders;
}
export declare class DeleteLoggerDefinitionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteLoggerDefinitionResponse?: Map<string, any>;
    statusCode: number;
}
