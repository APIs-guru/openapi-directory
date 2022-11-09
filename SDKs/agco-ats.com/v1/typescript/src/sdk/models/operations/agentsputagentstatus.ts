import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AgentsPutAgentStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentID" })
  agentId: number;
}


export class AgentsPutAgentStatusRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  buildSystemSharedDtoAgentStatus?: shared.BuildSystemSharedDtoAgentStatus;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  buildSystemSharedDtoAgentStatus1?: shared.BuildSystemSharedDtoAgentStatus;

  @Metadata({ data: "request, media_type=text/json" })
  buildSystemSharedDtoAgentStatus2?: shared.BuildSystemSharedDtoAgentStatus;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class AgentsPutAgentStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AgentsPutAgentStatusPathParams;

  @Metadata()
  request: AgentsPutAgentStatusRequests;
}


export class AgentsPutAgentStatusResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
