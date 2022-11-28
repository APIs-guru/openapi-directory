import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateVirtualServicePathParams extends SpeakeasyBase {
    meshName: string;
}
export declare class CreateVirtualServiceQueryParams extends SpeakeasyBase {
    meshOwner?: string;
}
export declare class CreateVirtualServiceHeaders extends SpeakeasyBase {
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
export declare class CreateVirtualServiceRequestBodySpec extends SpeakeasyBase {
    provider?: shared.VirtualServiceProvider;
}
export declare class CreateVirtualServiceRequestBody extends SpeakeasyBase {
    clientToken?: string;
    spec: CreateVirtualServiceRequestBodySpec;
    tags?: shared.TagRef[];
    virtualServiceName: string;
}
export declare class CreateVirtualServiceRequest extends SpeakeasyBase {
    pathParams: CreateVirtualServicePathParams;
    queryParams: CreateVirtualServiceQueryParams;
    headers: CreateVirtualServiceHeaders;
    request: CreateVirtualServiceRequestBody;
}
export declare class CreateVirtualServiceResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    createVirtualServiceOutput?: shared.CreateVirtualServiceOutput;
    forbiddenException?: any;
    internalServerErrorException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
