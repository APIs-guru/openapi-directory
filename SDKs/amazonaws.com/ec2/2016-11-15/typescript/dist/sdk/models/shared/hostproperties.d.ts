import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the properties of a Dedicated Host.
**/
export declare class HostProperties extends SpeakeasyBase {
    cores?: number;
    instanceFamily?: string;
    instanceType?: string;
    sockets?: number;
    totalVCpus?: number;
}
