import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AgentsGetAgentActivityRunPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentID" })
  agentId: number;
}


export class AgentsGetAgentActivityRunRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AgentsGetAgentActivityRunPathParams;
}


export class AgentsGetAgentActivityRunResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  buildSystemSharedDtoActivityRun?: shared.BuildSystemSharedDtoActivityRun;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
