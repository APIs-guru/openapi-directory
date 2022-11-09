import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DecodeConfig } from "./decodeconfig";
import { DemodulationConfig } from "./demodulationconfig";
import { SpectrumConfig } from "./spectrumconfig";


// AntennaDownlinkDemodDecodeConfig
/** 
 * Information about how AWS Ground Station should conﬁgure an antenna for downlink demod decode during a contact.
**/
export class AntennaDownlinkDemodDecodeConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=decodeConfig" })
  decodeConfig: DecodeConfig;

  @Metadata({ data: "json, name=demodulationConfig" })
  demodulationConfig: DemodulationConfig;

  @Metadata({ data: "json, name=spectrumConfig" })
  spectrumConfig: SpectrumConfig;
}
