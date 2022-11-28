import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AgentsPutAgentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentID" })
  agentId: number;
}


export class AgentsPutAgentRequestsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  buildSystemSharedDtoAgent?: shared.BuildSystemSharedDtoAgentInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  buildSystemSharedDtoAgent1?: shared.BuildSystemSharedDtoAgentInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  buildSystemSharedDtoAgent2?: shared.BuildSystemSharedDtoAgentInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class AgentsPutAgentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AgentsPutAgentPathParams;

  @SpeakeasyMetadata()
  request: AgentsPutAgentRequestsInput;
}


export class AgentsPutAgentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
