import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FrequencyBandwidth } from "./frequencybandwidth";
import { Frequency } from "./frequency";
import { PolarizationEnum } from "./polarizationenum";


// SpectrumConfig
/** 
 * Object that describes a spectral <code>Config</code>.
**/
export class SpectrumConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=bandwidth" })
  bandwidth: FrequencyBandwidth;

  @Metadata({ data: "json, name=centerFrequency" })
  centerFrequency: Frequency;

  @Metadata({ data: "json, name=polarization" })
  polarization?: PolarizationEnum;
}
