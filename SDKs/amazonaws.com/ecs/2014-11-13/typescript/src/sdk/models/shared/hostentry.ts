import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HostEntry
/** 
 * Hostnames and IP address entries that are added to the <code>/etc/hosts</code> file of a container via the <code>extraHosts</code> parameter of its <a>ContainerDefinition</a>. 
**/
export class HostEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname: string;

  @SpeakeasyMetadata({ data: "json, name=ipAddress" })
  ipAddress: string;
}
