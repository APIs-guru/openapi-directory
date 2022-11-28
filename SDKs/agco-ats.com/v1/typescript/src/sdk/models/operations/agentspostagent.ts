import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AgentsPostAgentRequestsInput extends SpeakeasyBase {
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


export class AgentsPostAgentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: AgentsPostAgentRequestsInput;
}


export class AgentsPostAgentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @SpeakeasyMetadata()
  agentsPostAgent200ApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  agentsPostAgent200TextJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
