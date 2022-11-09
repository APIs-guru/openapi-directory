import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum PutEventSelectorsXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101PutEventSelectors = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors"
}
export declare class PutEventSelectorsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutEventSelectorsXAmzTargetEnum;
}
export declare class PutEventSelectorsRequest extends SpeakeasyBase {
    headers: PutEventSelectorsHeaders;
    request: shared.PutEventSelectorsRequest;
}
export declare class PutEventSelectorsResponse extends SpeakeasyBase {
    contentType: string;
    insufficientDependencyServiceAccessPermissionException?: any;
    invalidEventSelectorsException?: any;
    invalidHomeRegionException?: any;
    invalidTrailNameException?: any;
    notOrganizationMasterAccountException?: any;
    operationNotPermittedException?: any;
    putEventSelectorsResponse?: shared.PutEventSelectorsResponse;
    statusCode: number;
    trailNotFoundException?: any;
    unsupportedOperationException?: any;
}
