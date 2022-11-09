import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Frequency } from "./frequency";
import { PolarizationEnum } from "./polarizationenum";


// UplinkSpectrumConfig
/** 
 * Information about the uplink spectral <code>Config</code>.
**/
export class UplinkSpectrumConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=centerFrequency" })
  centerFrequency: Frequency;

  @Metadata({ data: "json, name=polarization" })
  polarization?: PolarizationEnum;
}
