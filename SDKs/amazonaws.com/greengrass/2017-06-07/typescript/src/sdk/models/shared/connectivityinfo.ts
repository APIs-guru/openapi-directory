import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectivityInfo
/** 
 * Information about a Greengrass core's connectivity.
**/
export class ConnectivityInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HostAddress" })
  hostAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Metadata" })
  metadata?: string;

  @SpeakeasyMetadata({ data: "json, name=PortNumber" })
  portNumber?: number;
}
