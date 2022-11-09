import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UpdateResourceDefinitionPathParams extends SpeakeasyBase {
    resourceDefinitionId: string;
}
export declare class UpdateResourceDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateResourceDefinitionRequestBody extends SpeakeasyBase {
    name?: string;
}
export declare class UpdateResourceDefinitionRequest extends SpeakeasyBase {
    pathParams: UpdateResourceDefinitionPathParams;
    headers: UpdateResourceDefinitionHeaders;
    request: UpdateResourceDefinitionRequestBody;
}
export declare class UpdateResourceDefinitionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    statusCode: number;
    updateResourceDefinitionResponse?: Map<string, any>;
}
