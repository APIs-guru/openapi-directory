import { SpeakeasyBase } from "../../../internal/utils";
import { AgentPreview } from "./agentpreview";
export declare class PreviewAgentsResponse extends SpeakeasyBase {
    agentPreviews: AgentPreview[];
    nextToken?: string;
}
