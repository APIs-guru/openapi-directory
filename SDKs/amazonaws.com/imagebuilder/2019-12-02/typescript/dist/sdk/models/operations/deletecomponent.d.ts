import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteComponentQueryParams extends SpeakeasyBase {
    componentBuildVersionArn: string;
}
export declare class DeleteComponentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteComponentRequest extends SpeakeasyBase {
    queryParams: DeleteComponentQueryParams;
    headers: DeleteComponentHeaders;
}
export declare class DeleteComponentResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    deleteComponentResponse?: shared.DeleteComponentResponse;
    forbiddenException?: any;
    invalidRequestException?: any;
    resourceDependencyException?: any;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
