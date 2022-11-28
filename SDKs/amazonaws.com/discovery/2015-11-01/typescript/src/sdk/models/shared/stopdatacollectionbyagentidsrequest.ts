import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopDataCollectionByAgentIdsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentIds" })
  agentIds: string[];
}
