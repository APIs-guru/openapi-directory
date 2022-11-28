import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartDataCollectionByAgentIdsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentIds" })
  agentIds: string[];
}
