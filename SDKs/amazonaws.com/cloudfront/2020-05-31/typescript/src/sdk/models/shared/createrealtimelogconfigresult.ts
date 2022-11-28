import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RealtimeLogConfig } from "./realtimelogconfig";



export class CreateRealtimeLogConfigResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  realtimeLogConfig?: RealtimeLogConfig;
}
