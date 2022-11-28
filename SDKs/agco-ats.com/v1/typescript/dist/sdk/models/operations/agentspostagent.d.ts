import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AgentsPostAgentRequestsInput extends SpeakeasyBase {
    applicationXml: Uint8Array;
    buildSystemSharedDtoAgent?: shared.BuildSystemSharedDtoAgentInput;
    buildSystemSharedDtoAgent1?: shared.BuildSystemSharedDtoAgentInput;
    buildSystemSharedDtoAgent2?: shared.BuildSystemSharedDtoAgentInput;
    textXml: Uint8Array;
}
export declare class AgentsPostAgentRequest extends SpeakeasyBase {
    request: AgentsPostAgentRequestsInput;
}
export declare class AgentsPostAgentResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    agentsPostAgent200ApplicationJsonInt32Integer?: number;
    agentsPostAgent200TextJsonInt32Integer?: number;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
