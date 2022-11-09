import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAgentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=runmode" })
  runmode: string;
}


export class PostAgentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=:operation" })
  operation?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/cq:distribute" })
  jcrContentCqDistribute?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/cq:distribute@TypeHint" })
  jcrContentCqDistributeAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/cq:name" })
  jcrContentCqName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/cq:template" })
  jcrContentCqTemplate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/enabled" })
  jcrContentEnabled?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/jcr:description" })
  jcrContentJcrDescription?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/jcr:lastModified" })
  jcrContentJcrLastModified?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/jcr:lastModifiedBy" })
  jcrContentJcrLastModifiedBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/jcr:mixinTypes" })
  jcrContentJcrMixinTypes?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/jcr:title" })
  jcrContentJcrTitle?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/logLevel" })
  jcrContentLogLevel?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/noStatusUpdate" })
  jcrContentNoStatusUpdate?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/noVersioning" })
  jcrContentNoVersioning?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/protocolConnectTimeout" })
  jcrContentProtocolConnectTimeout?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/protocolHTTPConnectionClosed" })
  jcrContentProtocolHttpConnectionClosed?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/protocolHTTPExpired" })
  jcrContentProtocolHttpExpired?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/protocolHTTPHeaders" })
  jcrContentProtocolHttpHeaders?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/protocolHTTPHeaders@TypeHint" })
  jcrContentProtocolHttpHeadersAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/protocolHTTPMethod" })
  jcrContentProtocolHttpMethod?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/protocolHTTPSRelaxed" })
  jcrContentProtocolHttpsRelaxed?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/protocolInterface" })
  jcrContentProtocolInterface?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/protocolSocketTimeout" })
  jcrContentProtocolSocketTimeout?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/protocolVersion" })
  jcrContentProtocolVersion?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/proxyHost" })
  jcrContentProxyHost?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/proxyNTLMDomain" })
  jcrContentProxyNtlmDomain?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/proxyNTLMHost" })
  jcrContentProxyNtlmHost?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/proxyPassword" })
  jcrContentProxyPassword?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/proxyPort" })
  jcrContentProxyPort?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/proxyUser" })
  jcrContentProxyUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/queueBatchMaxSize" })
  jcrContentQueueBatchMaxSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/queueBatchMode" })
  jcrContentQueueBatchMode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/queueBatchWaitTime" })
  jcrContentQueueBatchWaitTime?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/retryDelay" })
  jcrContentRetryDelay?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/reverseReplication" })
  jcrContentReverseReplication?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/serializationType" })
  jcrContentSerializationType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/sling:resourceType" })
  jcrContentSlingResourceType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/ssl" })
  jcrContentSsl?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/transportNTLMDomain" })
  jcrContentTransportNtlmDomain?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/transportNTLMHost" })
  jcrContentTransportNtlmHost?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/transportPassword" })
  jcrContentTransportPassword?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/transportUri" })
  jcrContentTransportUri?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/transportUser" })
  jcrContentTransportUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/triggerDistribute" })
  jcrContentTriggerDistribute?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/triggerModified" })
  jcrContentTriggerModified?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/triggerOnOffTime" })
  jcrContentTriggerOnOffTime?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/triggerReceive" })
  jcrContentTriggerReceive?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/triggerSpecific" })
  jcrContentTriggerSpecific?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:content/userId" })
  jcrContentUserId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jcr:primaryType" })
  jcrPrimaryType?: string;
}


export class PostAgentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostAgentPathParams;

  @Metadata()
  queryParams: PostAgentQueryParams;
}


export class PostAgentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
