import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateConnectorProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateConnectorProfileRequestBodyConnectionModeEnum {
    Public = "Public",
    Private = "Private"
}
/**
 *  Defines the connector-specific configuration and credentials for the connector profile.
**/
export declare class UpdateConnectorProfileRequestBodyConnectorProfileConfig extends SpeakeasyBase {
    connectorProfileCredentials?: shared.ConnectorProfileCredentials;
    connectorProfileProperties?: shared.ConnectorProfileProperties;
}
export declare class UpdateConnectorProfileRequestBody extends SpeakeasyBase {
    connectionMode: UpdateConnectorProfileRequestBodyConnectionModeEnum;
    connectorProfileConfig: UpdateConnectorProfileRequestBodyConnectorProfileConfig;
    connectorProfileName: string;
}
export declare class UpdateConnectorProfileRequest extends SpeakeasyBase {
    headers: UpdateConnectorProfileHeaders;
    request: UpdateConnectorProfileRequestBody;
}
export declare class UpdateConnectorProfileResponse extends SpeakeasyBase {
    conflictException?: any;
    connectorAuthenticationException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateConnectorProfileResponse?: shared.UpdateConnectorProfileResponse;
    validationException?: any;
}
