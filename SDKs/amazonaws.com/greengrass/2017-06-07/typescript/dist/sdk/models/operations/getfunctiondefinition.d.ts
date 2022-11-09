import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetFunctionDefinitionPathParams extends SpeakeasyBase {
    functionDefinitionId: string;
}
export declare class GetFunctionDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetFunctionDefinitionRequest extends SpeakeasyBase {
    pathParams: GetFunctionDefinitionPathParams;
    headers: GetFunctionDefinitionHeaders;
}
export declare class GetFunctionDefinitionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getFunctionDefinitionResponse?: shared.GetFunctionDefinitionResponse;
    statusCode: number;
}
