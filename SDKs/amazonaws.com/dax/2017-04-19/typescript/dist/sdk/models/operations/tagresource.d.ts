import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum TagResourceXAmzTargetEnum {
    AmazonDaxv3TagResource = "AmazonDAXV3.TagResource"
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
    clusterNotFoundFault?: any;
    contentType: string;
    invalidArnFault?: any;
    invalidClusterStateFault?: any;
    invalidParameterCombinationException?: any;
    invalidParameterValueException?: any;
    serviceLinkedRoleNotFoundFault?: any;
    statusCode: number;
    tagQuotaPerResourceExceeded?: any;
    tagResourceResponse?: shared.TagResourceResponse;
}
