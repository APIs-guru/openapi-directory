import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum AddTagsXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101AddTags = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags"
}
export declare class AddTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddTagsXAmzTargetEnum;
}
export declare class AddTagsRequest extends SpeakeasyBase {
    headers: AddTagsHeaders;
    request: shared.AddTagsRequest;
}
export declare class AddTagsResponse extends SpeakeasyBase {
    addTagsResponse?: Map<string, any>;
    cloudTrailArnInvalidException?: any;
    contentType: string;
    invalidTagParameterException?: any;
    invalidTrailNameException?: any;
    notOrganizationMasterAccountException?: any;
    operationNotPermittedException?: any;
    resourceNotFoundException?: any;
    resourceTypeNotSupportedException?: any;
    statusCode: number;
    tagsLimitExceededException?: any;
    unsupportedOperationException?: any;
}
