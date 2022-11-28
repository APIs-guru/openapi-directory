import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AgentsGetAgentAsyncPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentID" })
  agentId: number;
}


export class AgentsGetAgentAsyncRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AgentsGetAgentAsyncPathParams;
}


export class AgentsGetAgentAsyncResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  buildSystemSharedDtoAgent?: shared.BuildSystemSharedDtoAgent;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
