import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AgentsPutAgentPathParams extends SpeakeasyBase {
    agentId: number;
}
export declare class AgentsPutAgentRequestsInput extends SpeakeasyBase {
    applicationXml: Uint8Array;
    buildSystemSharedDtoAgent?: shared.BuildSystemSharedDtoAgentInput;
    buildSystemSharedDtoAgent1?: shared.BuildSystemSharedDtoAgentInput;
    buildSystemSharedDtoAgent2?: shared.BuildSystemSharedDtoAgentInput;
    textXml: Uint8Array;
}
export declare class AgentsPutAgentRequest extends SpeakeasyBase {
    pathParams: AgentsPutAgentPathParams;
    request: AgentsPutAgentRequestsInput;
}
export declare class AgentsPutAgentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
