import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListTagsForResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListTagsForResourceRequestBody extends SpeakeasyBase {
    arn: string;
}
export declare class ListTagsForResourceRequest extends SpeakeasyBase {
    headers: ListTagsForResourceHeaders;
    request: ListTagsForResourceRequestBody;
}
export declare class ListTagsForResourceResponse extends SpeakeasyBase {
    contentType: string;
    listTagsForResourceResult?: shared.ListTagsForResourceResult;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
