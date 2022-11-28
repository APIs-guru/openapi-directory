import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateConnectorDefinitionVersionPathParams extends SpeakeasyBase {
    connectorDefinitionId: string;
}
export declare class CreateConnectorDefinitionVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmznClientToken?: string;
}
export declare class CreateConnectorDefinitionVersionRequestBody extends SpeakeasyBase {
    connectors?: shared.Connector[];
}
export declare class CreateConnectorDefinitionVersionRequest extends SpeakeasyBase {
    pathParams: CreateConnectorDefinitionVersionPathParams;
    headers: CreateConnectorDefinitionVersionHeaders;
    request: CreateConnectorDefinitionVersionRequestBody;
}
export declare class CreateConnectorDefinitionVersionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createConnectorDefinitionVersionResponse?: shared.CreateConnectorDefinitionVersionResponse;
    statusCode: number;
}
