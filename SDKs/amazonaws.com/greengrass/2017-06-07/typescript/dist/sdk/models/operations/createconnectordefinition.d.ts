import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateConnectorDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmznClientToken?: string;
}
/**
 * Information about the connector definition version, which is a container for connectors.
**/
export declare class CreateConnectorDefinitionRequestBodyInitialVersion extends SpeakeasyBase {
    connectors?: shared.Connector[];
}
export declare class CreateConnectorDefinitionRequestBody extends SpeakeasyBase {
    initialVersion?: CreateConnectorDefinitionRequestBodyInitialVersion;
    name?: string;
    tags?: Map<string, string>;
}
export declare class CreateConnectorDefinitionRequest extends SpeakeasyBase {
    headers: CreateConnectorDefinitionHeaders;
    request: CreateConnectorDefinitionRequestBody;
}
export declare class CreateConnectorDefinitionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createConnectorDefinitionResponse?: shared.CreateConnectorDefinitionResponse;
    statusCode: number;
}
