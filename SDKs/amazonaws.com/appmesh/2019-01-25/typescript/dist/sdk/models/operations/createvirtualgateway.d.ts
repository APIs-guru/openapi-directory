import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateVirtualGatewayPathParams extends SpeakeasyBase {
    meshName: string;
}
export declare class CreateVirtualGatewayQueryParams extends SpeakeasyBase {
    meshOwner?: string;
}
export declare class CreateVirtualGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * An object that represents the specification of a service mesh resource.
**/
export declare class CreateVirtualGatewayRequestBodySpec extends SpeakeasyBase {
    backendDefaults?: shared.VirtualGatewayBackendDefaults;
    listeners?: shared.VirtualGatewayListener[];
    logging?: shared.VirtualGatewayLogging;
}
export declare class CreateVirtualGatewayRequestBody extends SpeakeasyBase {
    clientToken?: string;
    spec: CreateVirtualGatewayRequestBodySpec;
    tags?: shared.TagRef[];
    virtualGatewayName: string;
}
export declare class CreateVirtualGatewayRequest extends SpeakeasyBase {
    pathParams: CreateVirtualGatewayPathParams;
    queryParams: CreateVirtualGatewayQueryParams;
    headers: CreateVirtualGatewayHeaders;
    request: CreateVirtualGatewayRequestBody;
}
export declare class CreateVirtualGatewayResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    createVirtualGatewayOutput?: shared.CreateVirtualGatewayOutput;
    forbiddenException?: any;
    internalServerErrorException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
