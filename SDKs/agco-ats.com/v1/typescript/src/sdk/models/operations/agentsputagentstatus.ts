import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AgentsPutAgentStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentID" })
  agentId: number;
}


export class AgentsPutAgentStatusRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  buildSystemSharedDtoAgentStatus?: shared.BuildSystemSharedDtoAgentStatus;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  buildSystemSharedDtoAgentStatus1?: shared.BuildSystemSharedDtoAgentStatus;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  buildSystemSharedDtoAgentStatus2?: shared.BuildSystemSharedDtoAgentStatus;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class AgentsPutAgentStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AgentsPutAgentStatusPathParams;

  @SpeakeasyMetadata()
  request: AgentsPutAgentStatusRequests;
}


export class AgentsPutAgentStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
