import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Initiates the creation of a conditional forwarder for your Directory Service for Microsoft Active Directory. Conditional forwarders are required in order to set up a trust relationship with another domain.
**/
export declare class CreateConditionalForwarderRequest extends SpeakeasyBase {
    directoryId: string;
    dnsIpAddrs: string[];
    remoteDomainName: string;
}
