import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RemoveTagsXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101RemoveTags = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags"
}
export declare class RemoveTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemoveTagsXAmzTargetEnum;
}
export declare class RemoveTagsRequest extends SpeakeasyBase {
    headers: RemoveTagsHeaders;
    request: shared.RemoveTagsRequest;
}
export declare class RemoveTagsResponse extends SpeakeasyBase {
    cloudTrailArnInvalidException?: any;
    contentType: string;
    invalidTagParameterException?: any;
    invalidTrailNameException?: any;
    notOrganizationMasterAccountException?: any;
    operationNotPermittedException?: any;
    removeTagsResponse?: Map<string, any>;
    resourceNotFoundException?: any;
    resourceTypeNotSupportedException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
