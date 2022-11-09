import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteConnectorDefinitionPathParams extends SpeakeasyBase {
    connectorDefinitionId: string;
}
export declare class DeleteConnectorDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteConnectorDefinitionRequest extends SpeakeasyBase {
    pathParams: DeleteConnectorDefinitionPathParams;
    headers: DeleteConnectorDefinitionHeaders;
}
export declare class DeleteConnectorDefinitionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteConnectorDefinitionResponse?: Map<string, any>;
    statusCode: number;
}
