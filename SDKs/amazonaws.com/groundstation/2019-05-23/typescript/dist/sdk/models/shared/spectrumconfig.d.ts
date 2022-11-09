import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FrequencyBandwidth } from "./frequencybandwidth";
import { Frequency } from "./frequency";
import { PolarizationEnum } from "./polarizationenum";
/**
 * Object that describes a spectral <code>Config</code>.
**/
export declare class SpectrumConfig extends SpeakeasyBase {
    bandwidth: FrequencyBandwidth;
    centerFrequency: Frequency;
    polarization?: PolarizationEnum;
}
