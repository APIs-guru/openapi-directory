import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLoggerDefinitionVersionPathParams extends SpeakeasyBase {
    loggerDefinitionId: string;
    loggerDefinitionVersionId: string;
}
export declare class GetLoggerDefinitionVersionQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare class GetLoggerDefinitionVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetLoggerDefinitionVersionRequest extends SpeakeasyBase {
    pathParams: GetLoggerDefinitionVersionPathParams;
    queryParams: GetLoggerDefinitionVersionQueryParams;
    headers: GetLoggerDefinitionVersionHeaders;
}
export declare class GetLoggerDefinitionVersionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getLoggerDefinitionVersionResponse?: shared.GetLoggerDefinitionVersionResponse;
    statusCode: number;
}
