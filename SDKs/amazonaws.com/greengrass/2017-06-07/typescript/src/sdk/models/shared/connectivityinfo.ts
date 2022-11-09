import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConnectivityInfo
/** 
 * Information about a Greengrass core's connectivity.
**/
export class ConnectivityInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=HostAddress" })
  hostAddress?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Metadata" })
  metadata?: string;

  @Metadata({ data: "json, name=PortNumber" })
  portNumber?: number;
}
