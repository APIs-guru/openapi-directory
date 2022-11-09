import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SpectrumConfig } from "./spectrumconfig";


// AntennaDownlinkConfig
/** 
 * Information about how AWS Ground Station should configure an antenna for downlink during a contact.
**/
export class AntennaDownlinkConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=spectrumConfig" })
  spectrumConfig: SpectrumConfig;
}
