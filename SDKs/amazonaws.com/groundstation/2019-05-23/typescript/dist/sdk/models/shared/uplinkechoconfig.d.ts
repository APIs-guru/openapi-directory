import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * <p>Information about an uplink echo <code>Config</code>.</p> <p>Parameters from the <code>AntennaUplinkConfig</code>, corresponding to the specified <code>AntennaUplinkConfigArn</code>, are used when this <code>UplinkEchoConfig</code> is used in a contact.</p>
**/
export declare class UplinkEchoConfig extends SpeakeasyBase {
    antennaUplinkConfigArn: string;
    enabled: boolean;
}
