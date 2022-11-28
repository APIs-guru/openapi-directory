import { SpeakeasyBase } from "../../../internal/utils";
import { VirtualServiceRef } from "./virtualserviceref";
/**
 * <zonbook></zonbook><xhtml></xhtml>
**/
export declare class ListVirtualServicesOutput extends SpeakeasyBase {
    nextToken?: string;
    virtualServices: VirtualServiceRef[];
}
