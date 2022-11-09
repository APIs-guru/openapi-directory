import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetTrailStatusXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101GetTrailStatus = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus"
}
export declare class GetTrailStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetTrailStatusXAmzTargetEnum;
}
export declare class GetTrailStatusRequest extends SpeakeasyBase {
    headers: GetTrailStatusHeaders;
    request: shared.GetTrailStatusRequest;
}
export declare class GetTrailStatusResponse extends SpeakeasyBase {
    contentType: string;
    getTrailStatusResponse?: shared.GetTrailStatusResponse;
    invalidTrailNameException?: any;
    operationNotPermittedException?: any;
    statusCode: number;
    trailNotFoundException?: any;
    unsupportedOperationException?: any;
}
