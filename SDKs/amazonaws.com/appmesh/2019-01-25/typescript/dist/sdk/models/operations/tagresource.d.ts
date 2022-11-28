import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagResourceQueryParams extends SpeakeasyBase {
    resourceArn: string;
}
export declare class TagResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class TagResourceRequestBody extends SpeakeasyBase {
    tags: shared.TagRef[];
}
export declare class TagResourceRequest extends SpeakeasyBase {
    queryParams: TagResourceQueryParams;
    headers: TagResourceHeaders;
    request: TagResourceRequestBody;
}
export declare class TagResourceResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tagResourceOutput?: Map<string, any>;
    tooManyRequestsException?: any;
    tooManyTagsException?: any;
}
