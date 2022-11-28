import { SpeakeasyBase } from "../../../internal/utils";
export declare class StopThingRegistrationTaskPathParams extends SpeakeasyBase {
    taskId: string;
}
export declare class StopThingRegistrationTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StopThingRegistrationTaskRequest extends SpeakeasyBase {
    pathParams: StopThingRegistrationTaskPathParams;
    headers: StopThingRegistrationTaskHeaders;
}
export declare class StopThingRegistrationTaskResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    stopThingRegistrationTaskResponse?: Map<string, any>;
    throttlingException?: any;
    unauthorizedException?: any;
}
