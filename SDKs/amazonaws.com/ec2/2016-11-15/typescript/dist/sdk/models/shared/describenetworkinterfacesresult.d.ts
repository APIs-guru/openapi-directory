import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkInterface } from "./networkinterface";
/**
 * Contains the output of DescribeNetworkInterfaces.
**/
export declare class DescribeNetworkInterfacesResult extends SpeakeasyBase {
    networkInterfaces?: NetworkInterface[];
    nextToken?: string;
}
