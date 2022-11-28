import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AgentsGetAgentActivityRunPathParams extends SpeakeasyBase {
    agentId: number;
}
export declare class AgentsGetAgentActivityRunRequest extends SpeakeasyBase {
    pathParams: AgentsGetAgentActivityRunPathParams;
}
export declare class AgentsGetAgentActivityRunResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    buildSystemSharedDtoActivityRun?: shared.BuildSystemSharedDtoActivityRun;
    contentType: string;
    statusCode: number;
}
