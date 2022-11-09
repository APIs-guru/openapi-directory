import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetDeploymentsPathParams extends SpeakeasyBase {
    restapiId: string;
}
export declare class GetDeploymentsQueryParams extends SpeakeasyBase {
    limit?: number;
    position?: string;
}
export declare class GetDeploymentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeploymentsRequest extends SpeakeasyBase {
    pathParams: GetDeploymentsPathParams;
    queryParams: GetDeploymentsQueryParams;
    headers: GetDeploymentsHeaders;
}
export declare class GetDeploymentsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deployments?: shared.Deployments;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
