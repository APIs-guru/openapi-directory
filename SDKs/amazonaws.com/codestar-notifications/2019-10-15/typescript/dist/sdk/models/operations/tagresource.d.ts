import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
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
    arn: string;
    tags: Map<string, string>;
}
export declare class TagResourceRequest extends SpeakeasyBase {
    headers: TagResourceHeaders;
    request: TagResourceRequestBody;
}
export declare class TagResourceResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    tagResourceResult?: shared.TagResourceResult;
    validationException?: any;
}
