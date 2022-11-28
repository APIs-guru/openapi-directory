import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteGatewayRoutePathParams extends SpeakeasyBase {
    gatewayRouteName: string;
    meshName: string;
    virtualGatewayName: string;
}
export declare class DeleteGatewayRouteQueryParams extends SpeakeasyBase {
    meshOwner?: string;
}
export declare class DeleteGatewayRouteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteGatewayRouteRequest extends SpeakeasyBase {
    pathParams: DeleteGatewayRoutePathParams;
    queryParams: DeleteGatewayRouteQueryParams;
    headers: DeleteGatewayRouteHeaders;
}
export declare class DeleteGatewayRouteResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteGatewayRouteOutput?: shared.DeleteGatewayRouteOutput;
    forbiddenException?: any;
    internalServerErrorException?: any;
    notFoundException?: any;
    resourceInUseException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
