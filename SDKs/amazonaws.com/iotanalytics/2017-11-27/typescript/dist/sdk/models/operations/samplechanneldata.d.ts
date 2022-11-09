import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SampleChannelDataPathParams extends SpeakeasyBase {
    channelName: string;
}
export declare class SampleChannelDataQueryParams extends SpeakeasyBase {
    endTime?: Date;
    maxMessages?: number;
    startTime?: Date;
}
export declare class SampleChannelDataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SampleChannelDataRequest extends SpeakeasyBase {
    pathParams: SampleChannelDataPathParams;
    queryParams: SampleChannelDataQueryParams;
    headers: SampleChannelDataHeaders;
}
export declare class SampleChannelDataResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    sampleChannelDataResponse?: shared.SampleChannelDataResponse;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
