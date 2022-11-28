import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListTagsXAmzTargetEnum {
    AmazonDaxv3ListTags = "AmazonDAXV3.ListTags"
}
export declare class ListTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTagsXAmzTargetEnum;
}
export declare class ListTagsRequest extends SpeakeasyBase {
    headers: ListTagsHeaders;
    request: shared.ListTagsRequest;
}
export declare class ListTagsResponse extends SpeakeasyBase {
    clusterNotFoundFault?: any;
    contentType: string;
    invalidArnFault?: any;
    invalidClusterStateFault?: any;
    invalidParameterCombinationException?: any;
    invalidParameterValueException?: any;
    listTagsResponse?: shared.ListTagsResponse;
    serviceLinkedRoleNotFoundFault?: any;
    statusCode: number;
}
