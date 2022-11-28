import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVirtualRouterPathParams extends SpeakeasyBase {
    meshName: string;
    virtualRouterName: string;
}
export declare class DeleteVirtualRouterQueryParams extends SpeakeasyBase {
    meshOwner?: string;
}
export declare class DeleteVirtualRouterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteVirtualRouterRequest extends SpeakeasyBase {
    pathParams: DeleteVirtualRouterPathParams;
    queryParams: DeleteVirtualRouterQueryParams;
    headers: DeleteVirtualRouterHeaders;
}
export declare class DeleteVirtualRouterResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteVirtualRouterOutput?: shared.DeleteVirtualRouterOutput;
    forbiddenException?: any;
    internalServerErrorException?: any;
    notFoundException?: any;
    resourceInUseException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
