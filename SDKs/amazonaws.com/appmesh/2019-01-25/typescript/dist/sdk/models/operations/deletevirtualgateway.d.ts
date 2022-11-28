import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVirtualGatewayPathParams extends SpeakeasyBase {
    meshName: string;
    virtualGatewayName: string;
}
export declare class DeleteVirtualGatewayQueryParams extends SpeakeasyBase {
    meshOwner?: string;
}
export declare class DeleteVirtualGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteVirtualGatewayRequest extends SpeakeasyBase {
    pathParams: DeleteVirtualGatewayPathParams;
    queryParams: DeleteVirtualGatewayQueryParams;
    headers: DeleteVirtualGatewayHeaders;
}
export declare class DeleteVirtualGatewayResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteVirtualGatewayOutput?: shared.DeleteVirtualGatewayOutput;
    forbiddenException?: any;
    internalServerErrorException?: any;
    notFoundException?: any;
    resourceInUseException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
