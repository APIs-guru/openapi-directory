import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Frequency } from "./frequency";
import { PolarizationEnum } from "./polarizationenum";



// UplinkSpectrumConfig
/** 
 * Information about the uplink spectral <code>Config</code>.
**/
export class UplinkSpectrumConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=centerFrequency" })
  centerFrequency: Frequency;

  @SpeakeasyMetadata({ data: "json, name=polarization" })
  polarization?: PolarizationEnum;
}
