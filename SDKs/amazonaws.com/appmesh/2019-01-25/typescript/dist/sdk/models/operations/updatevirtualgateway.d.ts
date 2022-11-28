import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateVirtualGatewayPathParams extends SpeakeasyBase {
    meshName: string;
    virtualGatewayName: string;
}
export declare class UpdateVirtualGatewayQueryParams extends SpeakeasyBase {
    meshOwner?: string;
}
export declare class UpdateVirtualGatewayHeaders extends SpeakeasyBase {
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
export declare class UpdateVirtualGatewayRequestBodySpec extends SpeakeasyBase {
    backendDefaults?: shared.VirtualGatewayBackendDefaults;
    listeners?: shared.VirtualGatewayListener[];
    logging?: shared.VirtualGatewayLogging;
}
export declare class UpdateVirtualGatewayRequestBody extends SpeakeasyBase {
    clientToken?: string;
    spec: UpdateVirtualGatewayRequestBodySpec;
}
export declare class UpdateVirtualGatewayRequest extends SpeakeasyBase {
    pathParams: UpdateVirtualGatewayPathParams;
    queryParams: UpdateVirtualGatewayQueryParams;
    headers: UpdateVirtualGatewayHeaders;
    request: UpdateVirtualGatewayRequestBody;
}
export declare class UpdateVirtualGatewayResponse extends SpeakeasyBase {
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
    updateVirtualGatewayOutput?: shared.UpdateVirtualGatewayOutput;
}
