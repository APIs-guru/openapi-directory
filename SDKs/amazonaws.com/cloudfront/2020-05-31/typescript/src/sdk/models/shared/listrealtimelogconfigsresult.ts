import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RealtimeLogConfigs } from "./realtimelogconfigs";



export class ListRealtimeLogConfigsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  realtimeLogConfigs?: RealtimeLogConfigs;
}
