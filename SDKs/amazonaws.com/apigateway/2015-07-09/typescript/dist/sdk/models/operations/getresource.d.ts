import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetResourcePathParams extends SpeakeasyBase {
    resourceId: string;
    restapiId: string;
}
export declare class GetResourceQueryParams extends SpeakeasyBase {
    embed?: string[];
}
export declare class GetResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetResourceRequest extends SpeakeasyBase {
    pathParams: GetResourcePathParams;
    queryParams: GetResourceQueryParams;
    headers: GetResourceHeaders;
}
export declare class GetResourceResponse extends SpeakeasyBase {
    contentType: string;
    notFoundException?: any;
    resource?: shared.Resource;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
