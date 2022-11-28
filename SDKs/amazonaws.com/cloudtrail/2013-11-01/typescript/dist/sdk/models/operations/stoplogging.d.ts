import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopLoggingXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101StopLogging = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging"
}
export declare class StopLoggingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopLoggingXAmzTargetEnum;
}
export declare class StopLoggingRequest extends SpeakeasyBase {
    headers: StopLoggingHeaders;
    request: shared.StopLoggingRequest;
}
export declare class StopLoggingResponse extends SpeakeasyBase {
    contentType: string;
    insufficientDependencyServiceAccessPermissionException?: any;
    invalidHomeRegionException?: any;
    invalidTrailNameException?: any;
    notOrganizationMasterAccountException?: any;
    operationNotPermittedException?: any;
    statusCode: number;
    stopLoggingResponse?: Map<string, any>;
    trailNotFoundException?: any;
    unsupportedOperationException?: any;
}
