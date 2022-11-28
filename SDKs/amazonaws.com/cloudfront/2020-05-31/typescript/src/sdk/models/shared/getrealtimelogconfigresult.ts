import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RealtimeLogConfig } from "./realtimelogconfig";



export class GetRealtimeLogConfigResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  realtimeLogConfig?: RealtimeLogConfig;
}
