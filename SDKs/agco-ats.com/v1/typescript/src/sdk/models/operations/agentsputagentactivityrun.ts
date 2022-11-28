import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AgentsPutAgentActivityRunPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentID" })
  agentId: number;
}


export class AgentsPutAgentActivityRunRequestsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  buildSystemSharedDtoActivityRun?: shared.BuildSystemSharedDtoActivityRunInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  buildSystemSharedDtoActivityRun1?: shared.BuildSystemSharedDtoActivityRunInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  buildSystemSharedDtoActivityRun2?: shared.BuildSystemSharedDtoActivityRunInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class AgentsPutAgentActivityRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AgentsPutAgentActivityRunPathParams;

  @SpeakeasyMetadata()
  request: AgentsPutAgentActivityRunRequestsInput;
}


export class AgentsPutAgentActivityRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
