import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateManagedEndpointPathParams extends SpeakeasyBase {
    virtualClusterId: string;
}
export declare class CreateManagedEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * A configuration specification to be used to override existing configurations.
**/
export declare class CreateManagedEndpointRequestBodyConfigurationOverrides extends SpeakeasyBase {
    applicationConfiguration?: shared.Configuration[];
    monitoringConfiguration?: shared.MonitoringConfiguration;
}
export declare class CreateManagedEndpointRequestBody extends SpeakeasyBase {
    certificateArn: string;
    clientToken: string;
    configurationOverrides?: CreateManagedEndpointRequestBodyConfigurationOverrides;
    executionRoleArn: string;
    name: string;
    releaseLabel: string;
    tags?: Map<string, string>;
    type: string;
}
export declare class CreateManagedEndpointRequest extends SpeakeasyBase {
    pathParams: CreateManagedEndpointPathParams;
    headers: CreateManagedEndpointHeaders;
    request: CreateManagedEndpointRequestBody;
}
export declare class CreateManagedEndpointResponse extends SpeakeasyBase {
    contentType: string;
    createManagedEndpointResponse?: shared.CreateManagedEndpointResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
