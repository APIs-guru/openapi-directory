import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UplinkSpectrumConfig } from "./uplinkspectrumconfig";
import { Eirp } from "./eirp";



// AntennaUplinkConfig
/** 
 * Information about the uplink <code>Config</code> of an antenna.
**/
export class AntennaUplinkConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=spectrumConfig" })
  spectrumConfig: UplinkSpectrumConfig;

  @SpeakeasyMetadata({ data: "json, name=targetEirp" })
  targetEirp: Eirp;

  @SpeakeasyMetadata({ data: "json, name=transmitDisabled" })
  transmitDisabled?: boolean;
}
