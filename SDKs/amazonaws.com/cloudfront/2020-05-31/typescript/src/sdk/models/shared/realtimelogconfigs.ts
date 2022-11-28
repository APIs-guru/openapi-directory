import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RealtimeLogConfig } from "./realtimelogconfig";



// RealtimeLogConfigs
/** 
 * A list of real-time log configurations.
**/
export class RealtimeLogConfigs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  isTruncated: boolean;

  @SpeakeasyMetadata({ elemType: RealtimeLogConfig })
  items?: RealtimeLogConfig[];

  @SpeakeasyMetadata()
  marker: string;

  @SpeakeasyMetadata()
  maxItems: number;

  @SpeakeasyMetadata()
  nextMarker?: string;
}
