import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BandwidthUnitsEnum } from "./bandwidthunitsenum";


// FrequencyBandwidth
/** 
 * Object that describes the frequency bandwidth. 
**/
export class FrequencyBandwidth extends SpeakeasyBase {
  @Metadata({ data: "json, name=units" })
  units: BandwidthUnitsEnum;

  @Metadata({ data: "json, name=value" })
  value: number;
}
