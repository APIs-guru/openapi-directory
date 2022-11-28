import { SpeakeasyBase } from "../../../internal/utils";
import { UplinkSpectrumConfig } from "./uplinkspectrumconfig";
import { Eirp } from "./eirp";
/**
 * Information about the uplink <code>Config</code> of an antenna.
**/
export declare class AntennaUplinkConfig extends SpeakeasyBase {
    spectrumConfig: UplinkSpectrumConfig;
    targetEirp: Eirp;
    transmitDisabled?: boolean;
}
