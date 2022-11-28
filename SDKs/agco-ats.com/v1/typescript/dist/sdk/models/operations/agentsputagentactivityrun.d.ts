import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AgentsPutAgentActivityRunPathParams extends SpeakeasyBase {
    agentId: number;
}
export declare class AgentsPutAgentActivityRunRequestsInput extends SpeakeasyBase {
    applicationXml: Uint8Array;
    buildSystemSharedDtoActivityRun?: shared.BuildSystemSharedDtoActivityRunInput;
    buildSystemSharedDtoActivityRun1?: shared.BuildSystemSharedDtoActivityRunInput;
    buildSystemSharedDtoActivityRun2?: shared.BuildSystemSharedDtoActivityRunInput;
    textXml: Uint8Array;
}
export declare class AgentsPutAgentActivityRunRequest extends SpeakeasyBase {
    pathParams: AgentsPutAgentActivityRunPathParams;
    request: AgentsPutAgentActivityRunRequestsInput;
}
export declare class AgentsPutAgentActivityRunResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
