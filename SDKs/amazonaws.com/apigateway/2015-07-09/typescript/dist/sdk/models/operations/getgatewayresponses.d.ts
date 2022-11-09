import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetGatewayResponsesPathParams extends SpeakeasyBase {
    restapiId: string;
}
export declare class GetGatewayResponsesQueryParams extends SpeakeasyBase {
    limit?: number;
    position?: string;
}
export declare class GetGatewayResponsesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGatewayResponsesRequest extends SpeakeasyBase {
    pathParams: GetGatewayResponsesPathParams;
    queryParams: GetGatewayResponsesQueryParams;
    headers: GetGatewayResponsesHeaders;
}
export declare class GetGatewayResponsesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    gatewayResponses?: shared.GatewayResponses;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
