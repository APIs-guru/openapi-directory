import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateVirtualServicePathParams extends SpeakeasyBase {
    meshName: string;
    virtualServiceName: string;
}
export declare class UpdateVirtualServiceQueryParams extends SpeakeasyBase {
    meshOwner?: string;
}
export declare class UpdateVirtualServiceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * An object that represents the specification of a virtual service.
**/
export declare class UpdateVirtualServiceRequestBodySpec extends SpeakeasyBase {
    provider?: shared.VirtualServiceProvider;
}
export declare class UpdateVirtualServiceRequestBody extends SpeakeasyBase {
    clientToken?: string;
    spec: UpdateVirtualServiceRequestBodySpec;
}
export declare class UpdateVirtualServiceRequest extends SpeakeasyBase {
    pathParams: UpdateVirtualServicePathParams;
    queryParams: UpdateVirtualServiceQueryParams;
    headers: UpdateVirtualServiceHeaders;
    request: UpdateVirtualServiceRequestBody;
}
export declare class UpdateVirtualServiceResponse extends SpeakeasyBase {
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
    updateVirtualServiceOutput?: shared.UpdateVirtualServiceOutput;
}
