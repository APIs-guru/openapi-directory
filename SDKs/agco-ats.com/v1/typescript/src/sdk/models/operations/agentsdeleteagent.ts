import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AgentsDeleteAgentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentID" })
  agentId: number;
}


export class AgentsDeleteAgentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AgentsDeleteAgentPathParams;
}


export class AgentsDeleteAgentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
