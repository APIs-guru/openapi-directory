import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteFunctionDefinitionPathParams extends SpeakeasyBase {
    functionDefinitionId: string;
}
export declare class DeleteFunctionDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteFunctionDefinitionRequest extends SpeakeasyBase {
    pathParams: DeleteFunctionDefinitionPathParams;
    headers: DeleteFunctionDefinitionHeaders;
}
export declare class DeleteFunctionDefinitionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteFunctionDefinitionResponse?: Map<string, any>;
    statusCode: number;
}
