import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DecodeConfig } from "./decodeconfig";
import { DemodulationConfig } from "./demodulationconfig";
import { SpectrumConfig } from "./spectrumconfig";
/**
 * Information about how AWS Ground Station should conﬁgure an antenna for downlink demod decode during a contact.
**/
export declare class AntennaDownlinkDemodDecodeConfig extends SpeakeasyBase {
    decodeConfig: DecodeConfig;
    demodulationConfig: DemodulationConfig;
    spectrumConfig: SpectrumConfig;
}
