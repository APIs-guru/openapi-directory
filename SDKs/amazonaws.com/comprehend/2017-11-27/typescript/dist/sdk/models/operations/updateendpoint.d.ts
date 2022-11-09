import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateEndpointXAmzTargetEnum {
    Comprehend20171127UpdateEndpoint = "Comprehend_20171127.UpdateEndpoint"
}
export declare class UpdateEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateEndpointXAmzTargetEnum;
}
export declare class UpdateEndpointRequest extends SpeakeasyBase {
    headers: UpdateEndpointHeaders;
    request: shared.UpdateEndpointRequest;
}
export declare class UpdateEndpointResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceLimitExceededException?: any;
    resourceNotFoundException?: any;
    resourceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateEndpointResponse?: Map<string, any>;
}
