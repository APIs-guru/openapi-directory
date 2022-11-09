import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateChannelHeaders extends SpeakeasyBase {
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
export declare class CreateChannelRequestBodyChannelStorage extends SpeakeasyBase {
    customerManagedS3?: shared.CustomerManagedChannelS3Storage;
    serviceManagedS3?: Map<string, any>;
}
/**
 * How long, in days, message data is kept.
**/
export declare class CreateChannelRequestBodyRetentionPeriod extends SpeakeasyBase {
    numberOfDays?: number;
    unlimited?: boolean;
}
export declare class CreateChannelRequestBody extends SpeakeasyBase {
    channelName: string;
    channelStorage?: CreateChannelRequestBodyChannelStorage;
    retentionPeriod?: CreateChannelRequestBodyRetentionPeriod;
    tags?: shared.Tag[];
}
export declare class CreateChannelRequest extends SpeakeasyBase {
    headers: CreateChannelHeaders;
    request: CreateChannelRequestBody;
}
export declare class CreateChannelResponse extends SpeakeasyBase {
    contentType: string;
    createChannelResponse?: shared.CreateChannelResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
