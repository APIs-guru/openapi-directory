import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetResourcesPathParams extends SpeakeasyBase {
    restapiId: string;
}
export declare class GetResourcesQueryParams extends SpeakeasyBase {
    embed?: string[];
    limit?: number;
    position?: string;
}
export declare class GetResourcesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetResourcesRequest extends SpeakeasyBase {
    pathParams: GetResourcesPathParams;
    queryParams: GetResourcesQueryParams;
    headers: GetResourcesHeaders;
}
export declare class GetResourcesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    resources?: shared.Resources;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
