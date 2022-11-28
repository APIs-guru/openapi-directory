import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AgentPreview } from "./agentpreview";



export class PreviewAgentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentPreviews", elemType: AgentPreview })
  agentPreviews: AgentPreview[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
