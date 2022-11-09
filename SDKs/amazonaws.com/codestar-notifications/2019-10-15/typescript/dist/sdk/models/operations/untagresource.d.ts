import { SpeakeasyBase } from "../../../internal/utils/utils";
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
    arn: string;
    tagKeys: string[];
}
export declare class UntagResourceRequest extends SpeakeasyBase {
    headers: UntagResourceHeaders;
    request: UntagResourceRequestBody;
}
export declare class UntagResourceResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    untagResourceResult?: Map<string, any>;
    validationException?: any;
}
