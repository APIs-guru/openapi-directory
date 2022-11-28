import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConfigureAgentPathParams extends SpeakeasyBase {
    profilingGroupName: string;
}
export declare class ConfigureAgentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ConfigureAgentRequestBody extends SpeakeasyBase {
    fleetInstanceId?: string;
    metadata?: Map<string, string>;
}
export declare class ConfigureAgentRequest extends SpeakeasyBase {
    pathParams: ConfigureAgentPathParams;
    headers: ConfigureAgentHeaders;
    request: ConfigureAgentRequestBody;
}
export declare class ConfigureAgentResponse extends SpeakeasyBase {
    configureAgentResponse?: shared.ConfigureAgentResponse;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
