import { SpeakeasyBase } from "../../../internal/utils";
import { ClientPolicy } from "./clientpolicy";
/**
 * An object that represents a virtual service backend for a virtual node.
**/
export declare class VirtualServiceBackend extends SpeakeasyBase {
    clientPolicy?: ClientPolicy;
    virtualServiceName: string;
}
