import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagsPathParams extends SpeakeasyBase {
    resourceArn: string;
}
export declare class GetTagsQueryParams extends SpeakeasyBase {
    limit?: number;
    position?: string;
}
export declare class GetTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetTagsRequest extends SpeakeasyBase {
    pathParams: GetTagsPathParams;
    queryParams: GetTagsQueryParams;
    headers: GetTagsHeaders;
}
export declare class GetTagsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tags?: shared.Tags;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
