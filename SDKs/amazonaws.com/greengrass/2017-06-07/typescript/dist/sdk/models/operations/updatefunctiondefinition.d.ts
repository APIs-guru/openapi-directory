import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateFunctionDefinitionPathParams extends SpeakeasyBase {
    functionDefinitionId: string;
}
export declare class UpdateFunctionDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateFunctionDefinitionRequestBody extends SpeakeasyBase {
    name?: string;
}
export declare class UpdateFunctionDefinitionRequest extends SpeakeasyBase {
    pathParams: UpdateFunctionDefinitionPathParams;
    headers: UpdateFunctionDefinitionHeaders;
    request: UpdateFunctionDefinitionRequestBody;
}
export declare class UpdateFunctionDefinitionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    statusCode: number;
    updateFunctionDefinitionResponse?: Map<string, any>;
}
