import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDeploymentsPathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class GetDeploymentsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
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
    getDeploymentsResponse?: shared.GetDeploymentsResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
