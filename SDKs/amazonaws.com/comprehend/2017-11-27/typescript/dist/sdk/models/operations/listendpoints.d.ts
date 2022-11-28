import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListEndpointsXAmzTargetEnum {
    Comprehend20171127ListEndpoints = "Comprehend_20171127.ListEndpoints"
}
export declare class ListEndpointsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListEndpointsXAmzTargetEnum;
}
export declare class ListEndpointsRequest extends SpeakeasyBase {
    headers: ListEndpointsHeaders;
    request: shared.ListEndpointsRequest;
}
export declare class ListEndpointsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    listEndpointsResponse?: shared.ListEndpointsResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
