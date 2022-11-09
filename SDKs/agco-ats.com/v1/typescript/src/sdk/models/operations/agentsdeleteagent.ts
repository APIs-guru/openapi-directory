import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AgentsDeleteAgentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentID" })
  agentId: number;
}


export class AgentsDeleteAgentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AgentsDeleteAgentPathParams;
}


export class AgentsDeleteAgentResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
