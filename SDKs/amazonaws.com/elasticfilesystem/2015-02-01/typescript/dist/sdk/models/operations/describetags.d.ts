import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeTagsPathParams extends SpeakeasyBase {
    fileSystemId: string;
}
export declare class DescribeTagsQueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: number;
}
export declare class DescribeTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeTagsRequest extends SpeakeasyBase {
    pathParams: DescribeTagsPathParams;
    queryParams: DescribeTagsQueryParams;
    headers: DescribeTagsHeaders;
}
export declare class DescribeTagsResponse extends SpeakeasyBase {
    badRequest?: any;
    contentType: string;
    describeTagsResponse?: shared.DescribeTagsResponse;
    fileSystemNotFound?: any;
    internalServerError?: any;
    statusCode: number;
}
