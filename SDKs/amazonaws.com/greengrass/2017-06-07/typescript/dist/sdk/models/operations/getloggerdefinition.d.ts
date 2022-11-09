import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetLoggerDefinitionPathParams extends SpeakeasyBase {
    loggerDefinitionId: string;
}
export declare class GetLoggerDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetLoggerDefinitionRequest extends SpeakeasyBase {
    pathParams: GetLoggerDefinitionPathParams;
    headers: GetLoggerDefinitionHeaders;
}
export declare class GetLoggerDefinitionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getLoggerDefinitionResponse?: shared.GetLoggerDefinitionResponse;
    statusCode: number;
}
