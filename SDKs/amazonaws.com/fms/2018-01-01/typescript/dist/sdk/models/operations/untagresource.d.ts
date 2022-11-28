import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UntagResourceXAmzTargetEnum {
    Awsfms20180101UntagResource = "AWSFMS_20180101.UntagResource"
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
    contentType: string;
    internalErrorException?: any;
    invalidInputException?: any;
    invalidOperationException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    untagResourceResponse?: Map<string, any>;
}
