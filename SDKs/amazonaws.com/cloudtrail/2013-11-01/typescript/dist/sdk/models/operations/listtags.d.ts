import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListTagsQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum ListTagsXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101ListTags = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags"
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
    queryParams: ListTagsQueryParams;
    headers: ListTagsHeaders;
    request: shared.ListTagsRequest;
}
export declare class ListTagsResponse extends SpeakeasyBase {
    cloudTrailArnInvalidException?: any;
    contentType: string;
    invalidTokenException?: any;
    invalidTrailNameException?: any;
    listTagsResponse?: shared.ListTagsResponse;
    operationNotPermittedException?: any;
    resourceNotFoundException?: any;
    resourceTypeNotSupportedException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
