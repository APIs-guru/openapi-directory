import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FrequencyBandwidth } from "./frequencybandwidth";
import { Frequency } from "./frequency";
import { PolarizationEnum } from "./polarizationenum";



// SpectrumConfig
/** 
 * Object that describes a spectral <code>Config</code>.
**/
export class SpectrumConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandwidth" })
  bandwidth: FrequencyBandwidth;

  @SpeakeasyMetadata({ data: "json, name=centerFrequency" })
  centerFrequency: Frequency;

  @SpeakeasyMetadata({ data: "json, name=polarization" })
  polarization?: PolarizationEnum;
}
