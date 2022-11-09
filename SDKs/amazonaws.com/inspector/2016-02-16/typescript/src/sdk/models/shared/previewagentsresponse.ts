import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AgentPreview } from "./agentpreview";


export class PreviewAgentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentPreviews", elemType: shared.AgentPreview })
  agentPreviews: AgentPreview[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
