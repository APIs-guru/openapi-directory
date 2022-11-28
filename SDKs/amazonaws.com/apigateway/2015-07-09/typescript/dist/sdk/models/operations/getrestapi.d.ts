import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRestApiPathParams extends SpeakeasyBase {
    restapiId: string;
}
export declare class GetRestApiHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRestApiRequest extends SpeakeasyBase {
    pathParams: GetRestApiPathParams;
    headers: GetRestApiHeaders;
}
export declare class GetRestApiResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    restApi?: shared.RestApi;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
