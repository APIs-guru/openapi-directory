import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListNamedShadowsForThingPathParams extends SpeakeasyBase {
    thingName: string;
}
export declare class ListNamedShadowsForThingQueryParams extends SpeakeasyBase {
    nextToken?: string;
    pageSize?: number;
}
export declare class ListNamedShadowsForThingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListNamedShadowsForThingRequest extends SpeakeasyBase {
    pathParams: ListNamedShadowsForThingPathParams;
    queryParams: ListNamedShadowsForThingQueryParams;
    headers: ListNamedShadowsForThingHeaders;
}
export declare class ListNamedShadowsForThingResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listNamedShadowsForThingResponse?: shared.ListNamedShadowsForThingResponse;
    methodNotAllowedException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
