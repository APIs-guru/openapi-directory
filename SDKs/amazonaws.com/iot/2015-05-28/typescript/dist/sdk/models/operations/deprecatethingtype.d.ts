import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeprecateThingTypePathParams extends SpeakeasyBase {
    thingTypeName: string;
}
export declare class DeprecateThingTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeprecateThingTypeRequestBody extends SpeakeasyBase {
    undoDeprecate?: boolean;
}
export declare class DeprecateThingTypeRequest extends SpeakeasyBase {
    pathParams: DeprecateThingTypePathParams;
    headers: DeprecateThingTypeHeaders;
    request: DeprecateThingTypeRequestBody;
}
export declare class DeprecateThingTypeResponse extends SpeakeasyBase {
    contentType: string;
    deprecateThingTypeResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
