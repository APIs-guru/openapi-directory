import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AgentsGetAgentAsyncPathParams extends SpeakeasyBase {
    agentId: number;
}
export declare class AgentsGetAgentAsyncRequest extends SpeakeasyBase {
    pathParams: AgentsGetAgentAsyncPathParams;
}
export declare class AgentsGetAgentAsyncResponse extends SpeakeasyBase {
    apiModelsApiError?: shared.ApiModelsApiError;
    body?: Uint8Array;
    buildSystemSharedDtoAgent?: shared.BuildSystemSharedDtoAgent;
    contentType: string;
    statusCode: number;
}
