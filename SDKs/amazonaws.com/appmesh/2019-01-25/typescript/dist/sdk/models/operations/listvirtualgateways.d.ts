import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListVirtualGatewaysPathParams extends SpeakeasyBase {
    meshName: string;
}
export declare class ListVirtualGatewaysQueryParams extends SpeakeasyBase {
    limit?: number;
    meshOwner?: string;
    nextToken?: string;
}
export declare class ListVirtualGatewaysHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListVirtualGatewaysRequest extends SpeakeasyBase {
    pathParams: ListVirtualGatewaysPathParams;
    queryParams: ListVirtualGatewaysQueryParams;
    headers: ListVirtualGatewaysHeaders;
}
export declare class ListVirtualGatewaysResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    listVirtualGatewaysOutput?: shared.ListVirtualGatewaysOutput;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
