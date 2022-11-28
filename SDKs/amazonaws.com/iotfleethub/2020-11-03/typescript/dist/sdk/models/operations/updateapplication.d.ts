import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateApplicationPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class UpdateApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateApplicationRequestBody extends SpeakeasyBase {
    applicationDescription?: string;
    applicationName?: string;
    clientToken?: string;
}
export declare class UpdateApplicationRequest extends SpeakeasyBase {
    pathParams: UpdateApplicationPathParams;
    headers: UpdateApplicationHeaders;
    request: UpdateApplicationRequestBody;
}
export declare class UpdateApplicationResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateApplicationResponse?: Map<string, any>;
}
