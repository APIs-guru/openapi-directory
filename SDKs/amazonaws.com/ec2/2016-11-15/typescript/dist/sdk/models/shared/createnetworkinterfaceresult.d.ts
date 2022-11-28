import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkInterface } from "./networkinterface";
/**
 * Contains the output of CreateNetworkInterface.
**/
export declare class CreateNetworkInterfaceResult extends SpeakeasyBase {
    clientToken?: string;
    networkInterface?: NetworkInterface;
}
