import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutInsightSelectorsXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101PutInsightSelectors = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors"
}
export declare class PutInsightSelectorsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutInsightSelectorsXAmzTargetEnum;
}
export declare class PutInsightSelectorsRequest extends SpeakeasyBase {
    headers: PutInsightSelectorsHeaders;
    request: shared.PutInsightSelectorsRequest;
}
export declare class PutInsightSelectorsResponse extends SpeakeasyBase {
    contentType: string;
    insufficientEncryptionPolicyException?: any;
    insufficientS3BucketPolicyException?: any;
    invalidHomeRegionException?: any;
    invalidInsightSelectorsException?: any;
    invalidTrailNameException?: any;
    kmsException?: any;
    notOrganizationMasterAccountException?: any;
    operationNotPermittedException?: any;
    putInsightSelectorsResponse?: shared.PutInsightSelectorsResponse;
    s3BucketDoesNotExistException?: any;
    statusCode: number;
    trailNotFoundException?: any;
    unsupportedOperationException?: any;
}
