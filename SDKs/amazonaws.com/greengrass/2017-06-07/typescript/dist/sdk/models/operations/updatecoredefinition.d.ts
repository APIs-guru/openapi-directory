import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UpdateCoreDefinitionPathParams extends SpeakeasyBase {
    coreDefinitionId: string;
}
export declare class UpdateCoreDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateCoreDefinitionRequestBody extends SpeakeasyBase {
    name?: string;
}
export declare class UpdateCoreDefinitionRequest extends SpeakeasyBase {
    pathParams: UpdateCoreDefinitionPathParams;
    headers: UpdateCoreDefinitionHeaders;
    request: UpdateCoreDefinitionRequestBody;
}
export declare class UpdateCoreDefinitionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    statusCode: number;
    updateCoreDefinitionResponse?: Map<string, any>;
}
