import { SpeakeasyBase } from "../../../internal/utils";
export declare class DetachThingPrincipalPathParams extends SpeakeasyBase {
    thingName: string;
}
export declare class DetachThingPrincipalHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmznPrincipal: string;
}
export declare class DetachThingPrincipalRequest extends SpeakeasyBase {
    pathParams: DetachThingPrincipalPathParams;
    headers: DetachThingPrincipalHeaders;
}
export declare class DetachThingPrincipalResponse extends SpeakeasyBase {
    contentType: string;
    detachThingPrincipalResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
