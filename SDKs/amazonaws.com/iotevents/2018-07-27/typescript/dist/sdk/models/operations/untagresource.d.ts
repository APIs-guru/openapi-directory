import { SpeakeasyBase } from "../../../internal/utils";
export declare class UntagResourceQueryParams extends SpeakeasyBase {
    resourceArn: string;
    tagKeys: string[];
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
export declare class UntagResourceRequest extends SpeakeasyBase {
    queryParams: UntagResourceQueryParams;
    headers: UntagResourceHeaders;
}
export declare class UntagResourceResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    untagResourceResponse?: Map<string, any>;
}
