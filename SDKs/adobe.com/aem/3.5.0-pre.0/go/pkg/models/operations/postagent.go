package operations

type PostAgentPathParams struct {
	Name    string `pathParam:"style=simple,explode=false,name=name"`
	Runmode string `pathParam:"style=simple,explode=false,name=runmode"`
}

type PostAgentQueryParams struct {
	Operation                               *string  `queryParam:"style=form,explode=true,name=:operation"`
	JcrContentCqDistribute                  *bool    `queryParam:"style=form,explode=true,name=jcr:content/cq:distribute"`
	JcrContentCqDistributeAtTypeHint        *string  `queryParam:"style=form,explode=true,name=jcr:content/cq:distribute@TypeHint"`
	JcrContentCqName                        *string  `queryParam:"style=form,explode=true,name=jcr:content/cq:name"`
	JcrContentCqTemplate                    *string  `queryParam:"style=form,explode=true,name=jcr:content/cq:template"`
	JcrContentEnabled                       *bool    `queryParam:"style=form,explode=true,name=jcr:content/enabled"`
	JcrContentJcrDescription                *string  `queryParam:"style=form,explode=true,name=jcr:content/jcr:description"`
	JcrContentJcrLastModified               *string  `queryParam:"style=form,explode=true,name=jcr:content/jcr:lastModified"`
	JcrContentJcrLastModifiedBy             *string  `queryParam:"style=form,explode=true,name=jcr:content/jcr:lastModifiedBy"`
	JcrContentJcrMixinTypes                 *string  `queryParam:"style=form,explode=true,name=jcr:content/jcr:mixinTypes"`
	JcrContentJcrTitle                      *string  `queryParam:"style=form,explode=true,name=jcr:content/jcr:title"`
	JcrContentLogLevel                      *string  `queryParam:"style=form,explode=true,name=jcr:content/logLevel"`
	JcrContentNoStatusUpdate                *bool    `queryParam:"style=form,explode=true,name=jcr:content/noStatusUpdate"`
	JcrContentNoVersioning                  *bool    `queryParam:"style=form,explode=true,name=jcr:content/noVersioning"`
	JcrContentProtocolConnectTimeout        *float64 `queryParam:"style=form,explode=true,name=jcr:content/protocolConnectTimeout"`
	JcrContentProtocolHTTPConnectionClosed  *bool    `queryParam:"style=form,explode=true,name=jcr:content/protocolHTTPConnectionClosed"`
	JcrContentProtocolHTTPExpired           *string  `queryParam:"style=form,explode=true,name=jcr:content/protocolHTTPExpired"`
	JcrContentProtocolHTTPHeaders           []string `queryParam:"style=form,explode=true,name=jcr:content/protocolHTTPHeaders"`
	JcrContentProtocolHTTPHeadersAtTypeHint *string  `queryParam:"style=form,explode=true,name=jcr:content/protocolHTTPHeaders@TypeHint"`
	JcrContentProtocolHTTPMethod            *string  `queryParam:"style=form,explode=true,name=jcr:content/protocolHTTPMethod"`
	JcrContentProtocolHTTPSRelaxed          *bool    `queryParam:"style=form,explode=true,name=jcr:content/protocolHTTPSRelaxed"`
	JcrContentProtocolInterface             *string  `queryParam:"style=form,explode=true,name=jcr:content/protocolInterface"`
	JcrContentProtocolSocketTimeout         *float64 `queryParam:"style=form,explode=true,name=jcr:content/protocolSocketTimeout"`
	JcrContentProtocolVersion               *string  `queryParam:"style=form,explode=true,name=jcr:content/protocolVersion"`
	JcrContentProxyHost                     *string  `queryParam:"style=form,explode=true,name=jcr:content/proxyHost"`
	JcrContentProxyNtlmDomain               *string  `queryParam:"style=form,explode=true,name=jcr:content/proxyNTLMDomain"`
	JcrContentProxyNtlmHost                 *string  `queryParam:"style=form,explode=true,name=jcr:content/proxyNTLMHost"`
	JcrContentProxyPassword                 *string  `queryParam:"style=form,explode=true,name=jcr:content/proxyPassword"`
	JcrContentProxyPort                     *float64 `queryParam:"style=form,explode=true,name=jcr:content/proxyPort"`
	JcrContentProxyUser                     *string  `queryParam:"style=form,explode=true,name=jcr:content/proxyUser"`
	JcrContentQueueBatchMaxSize             *float64 `queryParam:"style=form,explode=true,name=jcr:content/queueBatchMaxSize"`
	JcrContentQueueBatchMode                *string  `queryParam:"style=form,explode=true,name=jcr:content/queueBatchMode"`
	JcrContentQueueBatchWaitTime            *float64 `queryParam:"style=form,explode=true,name=jcr:content/queueBatchWaitTime"`
	JcrContentRetryDelay                    *string  `queryParam:"style=form,explode=true,name=jcr:content/retryDelay"`
	JcrContentReverseReplication            *bool    `queryParam:"style=form,explode=true,name=jcr:content/reverseReplication"`
	JcrContentSerializationType             *string  `queryParam:"style=form,explode=true,name=jcr:content/serializationType"`
	JcrContentSlingResourceType             *string  `queryParam:"style=form,explode=true,name=jcr:content/sling:resourceType"`
	JcrContentSsl                           *string  `queryParam:"style=form,explode=true,name=jcr:content/ssl"`
	JcrContentTransportNtlmDomain           *string  `queryParam:"style=form,explode=true,name=jcr:content/transportNTLMDomain"`
	JcrContentTransportNtlmHost             *string  `queryParam:"style=form,explode=true,name=jcr:content/transportNTLMHost"`
	JcrContentTransportPassword             *string  `queryParam:"style=form,explode=true,name=jcr:content/transportPassword"`
	JcrContentTransportURI                  *string  `queryParam:"style=form,explode=true,name=jcr:content/transportUri"`
	JcrContentTransportUser                 *string  `queryParam:"style=form,explode=true,name=jcr:content/transportUser"`
	JcrContentTriggerDistribute             *bool    `queryParam:"style=form,explode=true,name=jcr:content/triggerDistribute"`
	JcrContentTriggerModified               *bool    `queryParam:"style=form,explode=true,name=jcr:content/triggerModified"`
	JcrContentTriggerOnOffTime              *bool    `queryParam:"style=form,explode=true,name=jcr:content/triggerOnOffTime"`
	JcrContentTriggerReceive                *bool    `queryParam:"style=form,explode=true,name=jcr:content/triggerReceive"`
	JcrContentTriggerSpecific               *bool    `queryParam:"style=form,explode=true,name=jcr:content/triggerSpecific"`
	JcrContentUserID                        *string  `queryParam:"style=form,explode=true,name=jcr:content/userId"`
	JcrPrimaryType                          *string  `queryParam:"style=form,explode=true,name=jcr:primaryType"`
}

type PostAgentRequest struct {
	PathParams  PostAgentPathParams
	QueryParams PostAgentQueryParams
}

type PostAgentResponse struct {
	ContentType string
	StatusCode  int64
}
