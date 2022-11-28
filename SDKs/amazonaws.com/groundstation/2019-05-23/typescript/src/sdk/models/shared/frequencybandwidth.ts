import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BandwidthUnitsEnum } from "./bandwidthunitsenum";



// FrequencyBandwidth
/** 
 * Object that describes the frequency bandwidth. 
**/
export class FrequencyBandwidth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=units" })
  units: BandwidthUnitsEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}
