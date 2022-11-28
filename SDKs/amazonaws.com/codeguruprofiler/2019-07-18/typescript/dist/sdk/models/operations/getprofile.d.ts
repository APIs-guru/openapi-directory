import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProfilePathParams extends SpeakeasyBase {
    profilingGroupName: string;
}
export declare class GetProfileQueryParams extends SpeakeasyBase {
    endTime?: Date;
    maxDepth?: number;
    period?: string;
    startTime?: Date;
}
export declare class GetProfileHeaders extends SpeakeasyBase {
    accept?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetProfileRequest extends SpeakeasyBase {
    pathParams: GetProfilePathParams;
    queryParams: GetProfileQueryParams;
    headers: GetProfileHeaders;
}
export declare class GetProfileResponse extends SpeakeasyBase {
    contentType: string;
    getProfileResponse?: shared.GetProfileResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
