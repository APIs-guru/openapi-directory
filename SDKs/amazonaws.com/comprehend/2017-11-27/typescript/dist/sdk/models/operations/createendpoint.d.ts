import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateEndpointXAmzTargetEnum {
    Comprehend20171127CreateEndpoint = "Comprehend_20171127.CreateEndpoint"
}
export declare class CreateEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEndpointXAmzTargetEnum;
}
export declare class CreateEndpointRequest extends SpeakeasyBase {
    headers: CreateEndpointHeaders;
    request: shared.CreateEndpointRequest;
}
export declare class CreateEndpointResponse extends SpeakeasyBase {
    contentType: string;
    createEndpointResponse?: shared.CreateEndpointResponse;
    internalServerException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceLimitExceededException?: any;
    resourceNotFoundException?: any;
    resourceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    tooManyTagsException?: any;
}
