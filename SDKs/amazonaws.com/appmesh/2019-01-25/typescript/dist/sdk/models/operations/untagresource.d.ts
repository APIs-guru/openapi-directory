import { SpeakeasyBase } from "../../../internal/utils";
export declare class UntagResourceQueryParams extends SpeakeasyBase {
    resourceArn: string;
}
export declare class UntagResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UntagResourceRequestBody extends SpeakeasyBase {
    tagKeys: string[];
}
export declare class UntagResourceRequest extends SpeakeasyBase {
    queryParams: UntagResourceQueryParams;
    headers: UntagResourceHeaders;
    request: UntagResourceRequestBody;
}
export declare class UntagResourceResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    untagResourceOutput?: Map<string, any>;
}
