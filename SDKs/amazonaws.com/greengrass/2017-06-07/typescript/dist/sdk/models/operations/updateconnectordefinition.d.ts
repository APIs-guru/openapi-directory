import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateConnectorDefinitionPathParams extends SpeakeasyBase {
    connectorDefinitionId: string;
}
export declare class UpdateConnectorDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateConnectorDefinitionRequestBody extends SpeakeasyBase {
    name?: string;
}
export declare class UpdateConnectorDefinitionRequest extends SpeakeasyBase {
    pathParams: UpdateConnectorDefinitionPathParams;
    headers: UpdateConnectorDefinitionHeaders;
    request: UpdateConnectorDefinitionRequestBody;
}
export declare class UpdateConnectorDefinitionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    statusCode: number;
    updateConnectorDefinitionResponse?: Map<string, any>;
}
