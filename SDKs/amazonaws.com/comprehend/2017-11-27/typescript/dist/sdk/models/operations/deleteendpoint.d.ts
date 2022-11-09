import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteEndpointXAmzTargetEnum {
    Comprehend20171127DeleteEndpoint = "Comprehend_20171127.DeleteEndpoint"
}
export declare class DeleteEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteEndpointXAmzTargetEnum;
}
export declare class DeleteEndpointRequest extends SpeakeasyBase {
    headers: DeleteEndpointHeaders;
    request: shared.DeleteEndpointRequest;
}
export declare class DeleteEndpointResponse extends SpeakeasyBase {
    contentType: string;
    deleteEndpointResponse?: Map<string, any>;
    internalServerException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
