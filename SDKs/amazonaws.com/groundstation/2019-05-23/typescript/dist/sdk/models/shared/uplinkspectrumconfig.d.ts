import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Frequency } from "./frequency";
import { PolarizationEnum } from "./polarizationenum";
/**
 * Information about the uplink spectral <code>Config</code>.
**/
export declare class UplinkSpectrumConfig extends SpeakeasyBase {
    centerFrequency: Frequency;
    polarization?: PolarizationEnum;
}
