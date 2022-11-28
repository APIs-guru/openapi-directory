import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UntagResourceXAmzTargetEnum {
    AwsSimbaApiServiceV20180301UntagResource = "AWSSimbaAPIService_v20180301.UntagResource"
}
export declare class UntagResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UntagResourceXAmzTargetEnum;
}
export declare class UntagResourceRequest extends SpeakeasyBase {
    headers: UntagResourceHeaders;
    request: shared.UntagResourceRequest;
}
export declare class UntagResourceResponse extends SpeakeasyBase {
    badRequest?: any;
    contentType: string;
    internalServerError?: any;
    notServiceResourceError?: any;
    resourceDoesNotSupportTagging?: any;
    resourceNotFound?: any;
    statusCode: number;
    untagResourceResponse?: Map<string, any>;
}
