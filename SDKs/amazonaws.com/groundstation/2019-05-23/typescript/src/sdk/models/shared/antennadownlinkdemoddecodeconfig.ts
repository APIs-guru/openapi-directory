import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DecodeConfig } from "./decodeconfig";
import { DemodulationConfig } from "./demodulationconfig";
import { SpectrumConfig } from "./spectrumconfig";



// AntennaDownlinkDemodDecodeConfig
/** 
 * Information about how AWS Ground Station should conﬁgure an antenna for downlink demod decode during a contact.
**/
export class AntennaDownlinkDemodDecodeConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=decodeConfig" })
  decodeConfig: DecodeConfig;

  @SpeakeasyMetadata({ data: "json, name=demodulationConfig" })
  demodulationConfig: DemodulationConfig;

  @SpeakeasyMetadata({ data: "json, name=spectrumConfig" })
  spectrumConfig: SpectrumConfig;
}
