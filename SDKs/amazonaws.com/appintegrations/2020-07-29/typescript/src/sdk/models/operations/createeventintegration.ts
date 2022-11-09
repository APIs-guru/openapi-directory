import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateEventIntegrationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// CreateEventIntegrationRequestBodyEventFilter
/** 
 * The event filter.
**/
export class CreateEventIntegrationRequestBodyEventFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Source" })
  source?: string;
}


export class CreateEventIntegrationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=EventBridgeBus" })
  eventBridgeBus: string;

  @Metadata({ data: "json, name=EventFilter" })
  eventFilter: CreateEventIntegrationRequestBodyEventFilter;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}


export class CreateEventIntegrationRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateEventIntegrationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateEventIntegrationRequestBody;
}


export class CreateEventIntegrationResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createEventIntegrationResponse?: shared.CreateEventIntegrationResponse;

  @Metadata()
  duplicateResourceException?: any;

  @Metadata()
  internalServiceError?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
