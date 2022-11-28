import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetEventSelectorsXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101GetEventSelectors = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors"
}
export declare class GetEventSelectorsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetEventSelectorsXAmzTargetEnum;
}
export declare class GetEventSelectorsRequest extends SpeakeasyBase {
    headers: GetEventSelectorsHeaders;
    request: shared.GetEventSelectorsRequest;
}
export declare class GetEventSelectorsResponse extends SpeakeasyBase {
    contentType: string;
    getEventSelectorsResponse?: shared.GetEventSelectorsResponse;
    invalidTrailNameException?: any;
    operationNotPermittedException?: any;
    statusCode: number;
    trailNotFoundException?: any;
    unsupportedOperationException?: any;
}
