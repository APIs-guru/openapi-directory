import { SpeakeasyBase } from "../../../internal/utils";
export declare class AgentsDeleteAgentPathParams extends SpeakeasyBase {
    agentId: number;
}
export declare class AgentsDeleteAgentRequest extends SpeakeasyBase {
    pathParams: AgentsDeleteAgentPathParams;
}
export declare class AgentsDeleteAgentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
