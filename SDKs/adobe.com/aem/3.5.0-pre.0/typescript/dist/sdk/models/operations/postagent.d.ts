import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAgentPathParams extends SpeakeasyBase {
    name: string;
    runmode: string;
}
export declare class PostAgentQueryParams extends SpeakeasyBase {
    operation?: string;
    jcrContentCqDistribute?: boolean;
    jcrContentCqDistributeAtTypeHint?: string;
    jcrContentCqName?: string;
    jcrContentCqTemplate?: string;
    jcrContentEnabled?: boolean;
    jcrContentJcrDescription?: string;
    jcrContentJcrLastModified?: string;
    jcrContentJcrLastModifiedBy?: string;
    jcrContentJcrMixinTypes?: string;
    jcrContentJcrTitle?: string;
    jcrContentLogLevel?: string;
    jcrContentNoStatusUpdate?: boolean;
    jcrContentNoVersioning?: boolean;
    jcrContentProtocolConnectTimeout?: number;
    jcrContentProtocolHttpConnectionClosed?: boolean;
    jcrContentProtocolHttpExpired?: string;
    jcrContentProtocolHttpHeaders?: string[];
    jcrContentProtocolHttpHeadersAtTypeHint?: string;
    jcrContentProtocolHttpMethod?: string;
    jcrContentProtocolHttpsRelaxed?: boolean;
    jcrContentProtocolInterface?: string;
    jcrContentProtocolSocketTimeout?: number;
    jcrContentProtocolVersion?: string;
    jcrContentProxyHost?: string;
    jcrContentProxyNtlmDomain?: string;
    jcrContentProxyNtlmHost?: string;
    jcrContentProxyPassword?: string;
    jcrContentProxyPort?: number;
    jcrContentProxyUser?: string;
    jcrContentQueueBatchMaxSize?: number;
    jcrContentQueueBatchMode?: string;
    jcrContentQueueBatchWaitTime?: number;
    jcrContentRetryDelay?: string;
    jcrContentReverseReplication?: boolean;
    jcrContentSerializationType?: string;
    jcrContentSlingResourceType?: string;
    jcrContentSsl?: string;
    jcrContentTransportNtlmDomain?: string;
    jcrContentTransportNtlmHost?: string;
    jcrContentTransportPassword?: string;
    jcrContentTransportUri?: string;
    jcrContentTransportUser?: string;
    jcrContentTriggerDistribute?: boolean;
    jcrContentTriggerModified?: boolean;
    jcrContentTriggerOnOffTime?: boolean;
    jcrContentTriggerReceive?: boolean;
    jcrContentTriggerSpecific?: boolean;
    jcrContentUserId?: string;
    jcrPrimaryType?: string;
}
export declare class PostAgentRequest extends SpeakeasyBase {
    pathParams: PostAgentPathParams;
    queryParams: PostAgentQueryParams;
}
export declare class PostAgentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
