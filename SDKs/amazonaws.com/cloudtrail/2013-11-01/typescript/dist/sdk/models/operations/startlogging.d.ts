import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartLoggingXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101StartLogging = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging"
}
export declare class StartLoggingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartLoggingXAmzTargetEnum;
}
export declare class StartLoggingRequest extends SpeakeasyBase {
    headers: StartLoggingHeaders;
    request: shared.StartLoggingRequest;
}
export declare class StartLoggingResponse extends SpeakeasyBase {
    contentType: string;
    insufficientDependencyServiceAccessPermissionException?: any;
    invalidHomeRegionException?: any;
    invalidTrailNameException?: any;
    notOrganizationMasterAccountException?: any;
    operationNotPermittedException?: any;
    startLoggingResponse?: Map<string, any>;
    statusCode: number;
    trailNotFoundException?: any;
    unsupportedOperationException?: any;
}
