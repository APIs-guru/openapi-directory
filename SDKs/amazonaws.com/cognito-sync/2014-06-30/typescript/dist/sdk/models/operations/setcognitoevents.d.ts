import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetCognitoEventsPathParams extends SpeakeasyBase {
    identityPoolId: string;
}
export declare class SetCognitoEventsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SetCognitoEventsRequestBody extends SpeakeasyBase {
    events: Map<string, string>;
}
export declare class SetCognitoEventsRequest extends SpeakeasyBase {
    pathParams: SetCognitoEventsPathParams;
    headers: SetCognitoEventsHeaders;
    request: SetCognitoEventsRequestBody;
}
export declare class SetCognitoEventsResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
