import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCognitoEventsPathParams extends SpeakeasyBase {
    identityPoolId: string;
}
export declare class GetCognitoEventsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCognitoEventsRequest extends SpeakeasyBase {
    pathParams: GetCognitoEventsPathParams;
    headers: GetCognitoEventsHeaders;
}
export declare class GetCognitoEventsResponse extends SpeakeasyBase {
    contentType: string;
    getCognitoEventsResponse?: shared.GetCognitoEventsResponse;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
