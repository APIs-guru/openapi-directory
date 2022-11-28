import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetTrailXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101GetTrail = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail"
}
export declare class GetTrailHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetTrailXAmzTargetEnum;
}
export declare class GetTrailRequest extends SpeakeasyBase {
    headers: GetTrailHeaders;
    request: shared.GetTrailRequest;
}
export declare class GetTrailResponse extends SpeakeasyBase {
    contentType: string;
    getTrailResponse?: shared.GetTrailResponse;
    invalidTrailNameException?: any;
    operationNotPermittedException?: any;
    statusCode: number;
    trailNotFoundException?: any;
    unsupportedOperationException?: any;
}
