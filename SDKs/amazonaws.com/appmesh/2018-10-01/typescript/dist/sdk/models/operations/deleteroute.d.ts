import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRoutePathParams extends SpeakeasyBase {
    meshName: string;
    routeName: string;
    virtualRouterName: string;
}
export declare class DeleteRouteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteRouteRequest extends SpeakeasyBase {
    pathParams: DeleteRoutePathParams;
    headers: DeleteRouteHeaders;
}
export declare class DeleteRouteResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteRouteOutput?: shared.DeleteRouteOutput;
    forbiddenException?: any;
    internalServerErrorException?: any;
    notFoundException?: any;
    resourceInUseException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
