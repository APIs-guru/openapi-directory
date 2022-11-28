import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RealtimeLogConfig } from "./realtimelogconfig";



export class UpdateRealtimeLogConfigResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  realtimeLogConfig?: RealtimeLogConfig;
}
