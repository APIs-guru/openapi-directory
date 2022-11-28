import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AgentsGetAgentActivityRunPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentID" })
  agentId: number;
}


export class AgentsGetAgentActivityRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AgentsGetAgentActivityRunPathParams;
}


export class AgentsGetAgentActivityRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  buildSystemSharedDtoActivityRun?: shared.BuildSystemSharedDtoActivityRun;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
