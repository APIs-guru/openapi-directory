import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum TagResourceXAmzTargetEnum {
    Awsfms20180101TagResource = "AWSFMS_20180101.TagResource"
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
    contentType: string;
    internalErrorException?: any;
    invalidInputException?: any;
    invalidOperationException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tagResourceResponse?: Map<string, any>;
}
