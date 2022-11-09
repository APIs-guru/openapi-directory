import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UplinkEchoConfig
/** 
 * <p>Information about an uplink echo <code>Config</code>.</p> <p>Parameters from the <code>AntennaUplinkConfig</code>, corresponding to the specified <code>AntennaUplinkConfigArn</code>, are used when this <code>UplinkEchoConfig</code> is used in a contact.</p>
**/
export class UplinkEchoConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=antennaUplinkConfigArn" })
  antennaUplinkConfigArn: string;

  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;
}
