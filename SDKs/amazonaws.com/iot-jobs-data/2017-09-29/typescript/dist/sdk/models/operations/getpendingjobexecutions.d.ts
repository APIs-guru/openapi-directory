import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPendingJobExecutionsPathParams extends SpeakeasyBase {
    thingName: string;
}
export declare class GetPendingJobExecutionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetPendingJobExecutionsRequest extends SpeakeasyBase {
    pathParams: GetPendingJobExecutionsPathParams;
    headers: GetPendingJobExecutionsHeaders;
}
export declare class GetPendingJobExecutionsResponse extends SpeakeasyBase {
    certificateValidationException?: any;
    contentType: string;
    getPendingJobExecutionsResponse?: shared.GetPendingJobExecutionsResponse;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
