import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Updates a conditional forwarder.
**/
export declare class UpdateConditionalForwarderRequest extends SpeakeasyBase {
    directoryId: string;
    dnsIpAddrs: string[];
    remoteDomainName: string;
}
