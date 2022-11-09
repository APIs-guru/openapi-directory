import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AgentsGetAgentAsyncPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentID" })
  agentId: number;
}


export class AgentsGetAgentAsyncRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AgentsGetAgentAsyncPathParams;
}


export class AgentsGetAgentAsyncResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  buildSystemSharedDtoAgent?: shared.BuildSystemSharedDtoAgent;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
