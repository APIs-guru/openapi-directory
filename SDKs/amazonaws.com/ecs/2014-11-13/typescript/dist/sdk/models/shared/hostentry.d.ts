import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Hostnames and IP address entries that are added to the <code>/etc/hosts</code> file of a container via the <code>extraHosts</code> parameter of its <a>ContainerDefinition</a>.
**/
export declare class HostEntry extends SpeakeasyBase {
    hostname: string;
    ipAddress: string;
}
