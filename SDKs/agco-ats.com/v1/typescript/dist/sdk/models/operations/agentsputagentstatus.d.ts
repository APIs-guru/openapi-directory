import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AgentsPutAgentStatusPathParams extends SpeakeasyBase {
    agentId: number;
}
export declare class AgentsPutAgentStatusRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    buildSystemSharedDtoAgentStatus?: shared.BuildSystemSharedDtoAgentStatus;
    buildSystemSharedDtoAgentStatus1?: shared.BuildSystemSharedDtoAgentStatus;
    buildSystemSharedDtoAgentStatus2?: shared.BuildSystemSharedDtoAgentStatus;
    textXml: Uint8Array;
}
export declare class AgentsPutAgentStatusRequest extends SpeakeasyBase {
    pathParams: AgentsPutAgentStatusPathParams;
    request: AgentsPutAgentStatusRequests;
}
export declare class AgentsPutAgentStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
