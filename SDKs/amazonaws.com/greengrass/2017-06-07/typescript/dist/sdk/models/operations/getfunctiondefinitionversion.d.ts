import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetFunctionDefinitionVersionPathParams extends SpeakeasyBase {
    functionDefinitionId: string;
    functionDefinitionVersionId: string;
}
export declare class GetFunctionDefinitionVersionQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare class GetFunctionDefinitionVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetFunctionDefinitionVersionRequest extends SpeakeasyBase {
    pathParams: GetFunctionDefinitionVersionPathParams;
    queryParams: GetFunctionDefinitionVersionQueryParams;
    headers: GetFunctionDefinitionVersionHeaders;
}
export declare class GetFunctionDefinitionVersionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getFunctionDefinitionVersionResponse?: shared.GetFunctionDefinitionVersionResponse;
    statusCode: number;
}
