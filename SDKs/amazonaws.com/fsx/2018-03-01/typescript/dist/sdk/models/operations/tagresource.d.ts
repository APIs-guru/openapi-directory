import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum TagResourceXAmzTargetEnum {
    AwsSimbaApiServiceV20180301TagResource = "AWSSimbaAPIService_v20180301.TagResource"
}
export declare class TagResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TagResourceXAmzTargetEnum;
}
export declare class TagResourceRequest extends SpeakeasyBase {
    headers: TagResourceHeaders;
    request: shared.TagResourceRequest;
}
export declare class TagResourceResponse extends SpeakeasyBase {
    badRequest?: any;
    contentType: string;
    internalServerError?: any;
    notServiceResourceError?: any;
    resourceDoesNotSupportTagging?: any;
    resourceNotFound?: any;
    statusCode: number;
    tagResourceResponse?: Map<string, any>;
}
