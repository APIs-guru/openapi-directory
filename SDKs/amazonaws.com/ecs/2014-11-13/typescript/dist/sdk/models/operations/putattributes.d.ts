import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutAttributesXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113PutAttributes = "AmazonEC2ContainerServiceV20141113.PutAttributes"
}
export declare class PutAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutAttributesXAmzTargetEnum;
}
export declare class PutAttributesRequest extends SpeakeasyBase {
    headers: PutAttributesHeaders;
    request: shared.PutAttributesRequest;
}
export declare class PutAttributesResponse extends SpeakeasyBase {
    attributeLimitExceededException?: any;
    clusterNotFoundException?: any;
    contentType: string;
    invalidParameterException?: any;
    putAttributesResponse?: shared.PutAttributesResponse;
    statusCode: number;
    targetNotFoundException?: any;
}
