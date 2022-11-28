import { SpeakeasyBase } from "../../../internal/utils";
import { SpectrumConfig } from "./spectrumconfig";
/**
 * Information about how AWS Ground Station should configure an antenna for downlink during a contact.
**/
export declare class AntennaDownlinkConfig extends SpeakeasyBase {
    spectrumConfig: SpectrumConfig;
}
