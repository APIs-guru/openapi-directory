import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopDataCollectionByAgentIdsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentIds" })
  agentIds: string[];
}
