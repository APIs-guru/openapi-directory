import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeregisterJobDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeregisterJobDefinitionRequestBody extends SpeakeasyBase {
    jobDefinition: string;
}
export declare class DeregisterJobDefinitionRequest extends SpeakeasyBase {
    headers: DeregisterJobDefinitionHeaders;
    request: DeregisterJobDefinitionRequestBody;
}
export declare class DeregisterJobDefinitionResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    deregisterJobDefinitionResponse?: Map<string, any>;
    serverException?: any;
    statusCode: number;
}
