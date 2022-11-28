import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateVirtualRouterPathParams extends SpeakeasyBase {
    meshName: string;
    virtualRouterName: string;
}
export declare class UpdateVirtualRouterQueryParams extends SpeakeasyBase {
    meshOwner?: string;
}
export declare class UpdateVirtualRouterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * An object that represents the specification of a virtual router.
**/
export declare class UpdateVirtualRouterRequestBodySpec extends SpeakeasyBase {
    listeners?: shared.VirtualRouterListener[];
}
export declare class UpdateVirtualRouterRequestBody extends SpeakeasyBase {
    clientToken?: string;
    spec: UpdateVirtualRouterRequestBodySpec;
}
export declare class UpdateVirtualRouterRequest extends SpeakeasyBase {
    pathParams: UpdateVirtualRouterPathParams;
    queryParams: UpdateVirtualRouterQueryParams;
    headers: UpdateVirtualRouterHeaders;
    request: UpdateVirtualRouterRequestBody;
}
export declare class UpdateVirtualRouterResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateVirtualRouterOutput?: shared.UpdateVirtualRouterOutput;
}
