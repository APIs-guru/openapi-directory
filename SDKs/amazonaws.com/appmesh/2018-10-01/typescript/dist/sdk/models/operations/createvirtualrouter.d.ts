import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateVirtualRouterPathParams extends SpeakeasyBase {
    meshName: string;
}
export declare class CreateVirtualRouterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * An object representing the specification of a virtual router.
**/
export declare class CreateVirtualRouterRequestBodySpec extends SpeakeasyBase {
    serviceNames?: string[];
}
export declare class CreateVirtualRouterRequestBody extends SpeakeasyBase {
    clientToken?: string;
    spec: CreateVirtualRouterRequestBodySpec;
    virtualRouterName: string;
}
export declare class CreateVirtualRouterRequest extends SpeakeasyBase {
    pathParams: CreateVirtualRouterPathParams;
    headers: CreateVirtualRouterHeaders;
    request: CreateVirtualRouterRequestBody;
}
export declare class CreateVirtualRouterResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    createVirtualRouterOutput?: shared.CreateVirtualRouterOutput;
    forbiddenException?: any;
    internalServerErrorException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
