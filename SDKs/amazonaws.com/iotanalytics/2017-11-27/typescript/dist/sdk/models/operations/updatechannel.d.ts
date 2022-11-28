import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateChannelPathParams extends SpeakeasyBase {
    channelName: string;
}
export declare class UpdateChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Where channel data is stored. You may choose one of <code>serviceManagedS3</code>, <code>customerManagedS3</code> storage. If not specified, the default is <code>serviceManagedS3</code>. This can't be changed after creation of the channel.
**/
export declare class UpdateChannelRequestBodyChannelStorage extends SpeakeasyBase {
    customerManagedS3?: shared.CustomerManagedChannelS3Storage;
    serviceManagedS3?: Map<string, any>;
}
/**
 * How long, in days, message data is kept.
**/
export declare class UpdateChannelRequestBodyRetentionPeriod extends SpeakeasyBase {
    numberOfDays?: number;
    unlimited?: boolean;
}
export declare class UpdateChannelRequestBody extends SpeakeasyBase {
    channelStorage?: UpdateChannelRequestBodyChannelStorage;
    retentionPeriod?: UpdateChannelRequestBodyRetentionPeriod;
}
export declare class UpdateChannelRequest extends SpeakeasyBase {
    pathParams: UpdateChannelPathParams;
    headers: UpdateChannelHeaders;
    request: UpdateChannelRequestBody;
}
export declare class UpdateChannelResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
