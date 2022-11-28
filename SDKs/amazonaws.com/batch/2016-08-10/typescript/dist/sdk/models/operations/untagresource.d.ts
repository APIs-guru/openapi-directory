import { SpeakeasyBase } from "../../../internal/utils";
export declare class UntagResourcePathParams extends SpeakeasyBase {
    resourceArn: string;
}
export declare class UntagResourceQueryParams extends SpeakeasyBase {
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
    pathParams: UntagResourcePathParams;
    queryParams: UntagResourceQueryParams;
    headers: UntagResourceHeaders;
}
export declare class UntagResourceResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    serverException?: any;
    statusCode: number;
    untagResourceResponse?: Map<string, any>;
}
