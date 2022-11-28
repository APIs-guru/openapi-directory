import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RegisterClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The configuration sent to a cluster for configuration.
**/
export declare class RegisterClusterRequestBodyConnectorConfig extends SpeakeasyBase {
    provider?: shared.ConnectorConfigProviderEnum;
    roleArn?: string;
}
export declare class RegisterClusterRequestBody extends SpeakeasyBase {
    clientRequestToken?: string;
    connectorConfig: RegisterClusterRequestBodyConnectorConfig;
    name: string;
}
export declare class RegisterClusterRequest extends SpeakeasyBase {
    headers: RegisterClusterHeaders;
    request: RegisterClusterRequestBody;
}
export declare class RegisterClusterResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    invalidParameterException?: any;
    registerClusterResponse?: shared.RegisterClusterResponse;
    resourceLimitExceededException?: any;
    serverException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
