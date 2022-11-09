import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UplinkSpectrumConfig } from "./uplinkspectrumconfig";
import { Eirp } from "./eirp";


// AntennaUplinkConfig
/** 
 * Information about the uplink <code>Config</code> of an antenna.
**/
export class AntennaUplinkConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=spectrumConfig" })
  spectrumConfig: UplinkSpectrumConfig;

  @Metadata({ data: "json, name=targetEirp" })
  targetEirp: Eirp;

  @Metadata({ data: "json, name=transmitDisabled" })
  transmitDisabled?: boolean;
}
