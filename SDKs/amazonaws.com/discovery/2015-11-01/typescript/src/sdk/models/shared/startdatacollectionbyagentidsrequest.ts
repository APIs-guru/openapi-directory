import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartDataCollectionByAgentIdsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentIds" })
  agentIds: string[];
}
