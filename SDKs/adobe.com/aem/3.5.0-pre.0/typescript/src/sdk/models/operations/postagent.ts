import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAgentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=runmode" })
  runmode: string;
}


export class PostAgentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=:operation" })
  operation?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/cq:distribute" })
  jcrContentCqDistribute?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/cq:distribute@TypeHint" })
  jcrContentCqDistributeAtTypeHint?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/cq:name" })
  jcrContentCqName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/cq:template" })
  jcrContentCqTemplate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/enabled" })
  jcrContentEnabled?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/jcr:description" })
  jcrContentJcrDescription?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/jcr:lastModified" })
  jcrContentJcrLastModified?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/jcr:lastModifiedBy" })
  jcrContentJcrLastModifiedBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/jcr:mixinTypes" })
  jcrContentJcrMixinTypes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/jcr:title" })
  jcrContentJcrTitle?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/logLevel" })
  jcrContentLogLevel?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/noStatusUpdate" })
  jcrContentNoStatusUpdate?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/noVersioning" })
  jcrContentNoVersioning?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/protocolConnectTimeout" })
  jcrContentProtocolConnectTimeout?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/protocolHTTPConnectionClosed" })
  jcrContentProtocolHttpConnectionClosed?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/protocolHTTPExpired" })
  jcrContentProtocolHttpExpired?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/protocolHTTPHeaders" })
  jcrContentProtocolHttpHeaders?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/protocolHTTPHeaders@TypeHint" })
  jcrContentProtocolHttpHeadersAtTypeHint?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/protocolHTTPMethod" })
  jcrContentProtocolHttpMethod?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/protocolHTTPSRelaxed" })
  jcrContentProtocolHttpsRelaxed?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/protocolInterface" })
  jcrContentProtocolInterface?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/protocolSocketTimeout" })
  jcrContentProtocolSocketTimeout?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/protocolVersion" })
  jcrContentProtocolVersion?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/proxyHost" })
  jcrContentProxyHost?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/proxyNTLMDomain" })
  jcrContentProxyNtlmDomain?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/proxyNTLMHost" })
  jcrContentProxyNtlmHost?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/proxyPassword" })
  jcrContentProxyPassword?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/proxyPort" })
  jcrContentProxyPort?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/proxyUser" })
  jcrContentProxyUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/queueBatchMaxSize" })
  jcrContentQueueBatchMaxSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/queueBatchMode" })
  jcrContentQueueBatchMode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/queueBatchWaitTime" })
  jcrContentQueueBatchWaitTime?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/retryDelay" })
  jcrContentRetryDelay?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/reverseReplication" })
  jcrContentReverseReplication?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/serializationType" })
  jcrContentSerializationType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/sling:resourceType" })
  jcrContentSlingResourceType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/ssl" })
  jcrContentSsl?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/transportNTLMDomain" })
  jcrContentTransportNtlmDomain?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/transportNTLMHost" })
  jcrContentTransportNtlmHost?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/transportPassword" })
  jcrContentTransportPassword?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/transportUri" })
  jcrContentTransportUri?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/transportUser" })
  jcrContentTransportUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/triggerDistribute" })
  jcrContentTriggerDistribute?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/triggerModified" })
  jcrContentTriggerModified?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/triggerOnOffTime" })
  jcrContentTriggerOnOffTime?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/triggerReceive" })
  jcrContentTriggerReceive?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/triggerSpecific" })
  jcrContentTriggerSpecific?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:content/userId" })
  jcrContentUserId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jcr:primaryType" })
  jcrPrimaryType?: string;
}


export class PostAgentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostAgentPathParams;

  @SpeakeasyMetadata()
  queryParams: PostAgentQueryParams;
}


export class PostAgentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
