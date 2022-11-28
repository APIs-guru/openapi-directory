import { SpeakeasyBase } from "../../../internal/utils";
export declare class AttachThingPrincipalPathParams extends SpeakeasyBase {
    thingName: string;
}
export declare class AttachThingPrincipalHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmznPrincipal: string;
}
export declare class AttachThingPrincipalRequest extends SpeakeasyBase {
    pathParams: AttachThingPrincipalPathParams;
    headers: AttachThingPrincipalHeaders;
}
export declare class AttachThingPrincipalResponse extends SpeakeasyBase {
    attachThingPrincipalResponse?: Map<string, any>;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
